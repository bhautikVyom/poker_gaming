export const isMobileOrWebView = () => {
    if (typeof window === "undefined") return false;

    const ua = navigator.userAgent || navigator.vendor;

    const isMobile = /android|iphone|ipad|ipod/i.test(ua);

    const isWebView =
        /(wv|WebView)/i.test(ua) ||
        (/iPhone|iPad|iPod/i.test(ua) && !/Safari/i.test(ua));

    return isMobile || isWebView;
};