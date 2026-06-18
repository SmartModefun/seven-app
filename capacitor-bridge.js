window.CapacitorBridge = (() => {
    const isCapacitor = typeof window.Capacitor !== 'undefined' && window.Capacitor.isNative;
    const plugins = window.Capacitor?.Plugins || {};

    const RC_API_KEY = 'appl_YOUR_REVENUECAT_API_KEY';

    const COURSES = {
        'ingles-7-dias': { rcId: 'curso_ingles', name: 'Inglés en 7 Días' },
        'community-manager': { rcId: 'curso_community_manager', name: 'Community Manager' },
        'marketing-digital': { rcId: 'curso_marketing_digital', name: 'Marketing Digital' },
        'ecommerce': { rcId: 'curso_ecommerce', name: 'E-commerce' }
    };

    async function initRevenueCat(userId) {
        if (!isCapacitor) return false;
        const { Purchases } = plugins;
        if (!Purchases) return false;
        try {
            await Purchases.setup({ apiKey: RC_API_KEY, useAmazon: false });
            if (userId) await Purchases.logIn({ appUserId: userId });
            return true;
        } catch (e) {
            console.error('RC init error:', e);
            return false;
        }
    }

    async function purchaseCourse(courseId) {
        if (!isCapacitor) return { success: false, reason: 'not-capacitor' };
        const { Purchases } = plugins;
        if (!Purchases) return { success: false, reason: 'plugin-not-found' };
        const course = COURSES[courseId];
        if (!course) return { success: false, reason: 'unknown-course' };
        try {
            const offerings = await Purchases.getOfferings();
            const offering = offerings.current;
            if (!offering) return { success: false, reason: 'no-offering' };
            const product = offering[course.rcId] || Object.values(offering).find(p => p.identifier === course.rcId);
            if (!product) return { success: false, reason: 'product-not-found' };
            const result = await Purchases.purchaseStoreProduct({ product });
            return { success: true, customerInfo: result.customerInfo };
        } catch (e) {
            const msg = e.message || String(e);
            if (msg.includes('cancel')) return { success: false, reason: 'cancelled' };
            return { success: false, reason: msg };
        }
    }

    async function checkCourseAccess(courseId) {
        const course = COURSES[courseId];
        if (!course) return false;
        if (!isCapacitor) return false;
        const { Purchases } = plugins;
        if (!Purchases) return false;
        try {
            const info = await Purchases.getCustomerInfo();
            const ent = info.customerInfo.entitlements.active;
            return !!ent[course.rcId];
        } catch (e) {
            console.error('RC check error:', e);
            return false;
        }
    }

    async function restorePurchases() {
        if (!isCapacitor) return { success: false, reason: 'not-capacitor' };
        const { Purchases } = plugins;
        if (!Purchases) return { success: false, reason: 'plugin-not-found' };
        try {
            const result = await Purchases.restorePurchases();
            const ent = result.customerInfo.entitlements.active;
            const courses = Object.keys(ent).filter(k => ent[k].isActive);
            return { success: true, courses };
        } catch (e) {
            return { success: false, reason: e.message || String(e) };
        }
    }

    function isNative() { return isCapacitor; }

    function showBanner() {
        if (!isCapacitor) return;
        const { AdMob } = plugins;
        if (!AdMob) return;
        AdMob.showBanner({ position: 'bottom', isTesting: false }).catch(() => {});
    }

    function hideBanner() {
        if (!isCapacitor) return;
        const { AdMob } = plugins;
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
