window.CapacitorBridge = (() => {
    const isCapacitor = typeof window.Capacitor !== 'undefined' && window.Capacitor.isNative;

    const COURSES = {
        'ingles-7-dias': { rcId: 'curso_ingles', name: 'Inglés en 7 Días' },
        'community-manager': { rcId: 'curso_community_manager', name: 'Community Manager' },
        'marketing-digital': { rcId: 'curso_marketing_digital', name: 'Marketing Digital' },
        'ecommerce': { rcId: 'curso_ecommerce', name: 'E-commerce' }
    };

    async function initRevenueCat() { return false; }

    async function purchaseCourse() { return { success: false, reason: 'not-available' }; }

    async function checkCourseAccess() { return false; }

    async function restorePurchases() { return { success: false, reason: 'not-available' }; }

    function isNative() { return isCapacitor; }

    function showBanner() {}
    function hideBanner() {}

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
