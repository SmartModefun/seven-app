window.CapacitorBridge = (() => {
    const isCapacitor = typeof window.Capacitor !== 'undefined' && window.Capacitor.isNative;

    const COURSES = {
        'ingles-7-dias': { rcId: 'curso_ingles', name: 'Inglés en 7 Días' },
        'community-manager': { rcId: 'curso_community_manager', name: 'Community Manager' },
        'marketing-digital': { rcId: 'curso_marketing_digital', name: 'Marketing Digital' },
        'ecommerce': { rcId: 'curso_ecommerce', name: 'E-commerce' }
    };

    const RC_KEYS = {
        ios: 'appl_AtQHDxaBNytJQgSiCrRgDHijfPD',
        android: 'goog_YOUR_REVENUECAT_API_KEY'
    };

    function getPlatform() {
        if (window.Capacitor && window.Capacitor.getPlatform) {
            try { return window.Capacitor.getPlatform(); } catch (e) {}
        }
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) return 'ios';
        if (/android/i.test(navigator.userAgent)) return 'android';
        return 'web';
    }

    function getRevenueCatKey() {
        const platform = getPlatform();
        return platform === 'android' ? RC_KEYS.android : RC_KEYS.ios;
    }

    const RC_API_KEY = getRevenueCatKey();

    function ensurePlugin(name) {
        if (!window.Capacitor || !window.Capacitor.registerPlugin) return null;
        if (!window.Capacitor.Plugins[name]) {
            try {
                window.Capacitor.registerPlugin(name);
            } catch (e) {
                return null;
            }
        }
        return window.Capacitor.Plugins[name];
    }

    async function initRevenueCat(userEmail) {
        if (!isCapacitor) return false;
        try {
            const Purchases = ensurePlugin('Purchases');
            if (!Purchases) return false;
            await Purchases.configure({ apiKey: RC_API_KEY });
            if (userEmail) {
                await Purchases.setAttributes({ email: userEmail });
            }
            return true;
        } catch (e) {
            console.error('RevenueCat init error:', e);
            return false;
        }
    }

    async function purchaseCourse(courseId) {
        if (!isCapacitor) return { success: false, reason: 'not-available' };
        const course = COURSES[courseId];
        if (!course) return { success: false, reason: 'invalid-course' };
        try {
            const Purchases = ensurePlugin('Purchases');
            if (!Purchases) return { success: false, reason: 'not-available' };
            const offering = await Purchases.getOfferings();
            const packages = offering.current?.availablePackages || [];
            const pkg = packages.find(p => p.identifier === course.rcId);
            if (!pkg) return { success: false, reason: 'product-not-found' };
            const result = await Purchases.purchasePackage(pkg);
            if (result.customerInfo.entitlements.active[course.rcId]) {
                return { success: true };
            }
            return { success: false, reason: 'purchase-failed' };
        } catch (e) {
            if (e.code === '1' || e.userCancelled) {
                return { success: false, reason: 'cancelled' };
            }
            return { success: false, reason: e.message || 'error' };
        }
    }

    async function checkCourseAccess(courseId) {
        if (!isCapacitor) return false;
        const course = COURSES[courseId];
        if (!course) return false;
        try {
            const Purchases = ensurePlugin('Purchases');
            if (!Purchases) return false;
            const info = await Purchases.getCustomerInfo();
            return !!info.entitlements.active[course.rcId];
        } catch (e) {
            return false;
        }
    }

    async function restorePurchases() {
        if (!isCapacitor) return { success: false, reason: 'not-available' };
        try {
            const Purchases = ensurePlugin('Purchases');
            if (!Purchases) return { success: false, reason: 'not-available' };
            const info = await Purchases.restorePurchases();
            const restored = [];
            for (const [courseId, course] of Object.entries(COURSES)) {
                if (info.entitlements.active[course.rcId]) {
                    restored.push(course.rcId);
                }
            }
            return { success: true, courses: restored };
        } catch (e) {
            return { success: false, reason: e.message || 'error' };
        }
    }

    function isNative() { return isCapacitor; }

    function showBanner() {
        if (!isCapacitor) return;
        const AdMob = ensurePlugin('AdMob');
        if (!AdMob) return;
        AdMob.showBanner({ adId: 'ca-app-pub-3940256099942544/2934735716' }).catch(() => {});
    }

    function hideBanner() {
        if (!isCapacitor) return;
        const AdMob = ensurePlugin('AdMob');
        if (!AdMob) return;
        AdMob.hideBanner().catch(() => {});
    }

    return {
        isCapacitor,
        COURSES,
        initRevenueCat,
        purchaseCourse,
        checkCourseAccess,
        restorePurchases,
        isNative,
        showBanner,
        hideBanner
    };
})();
