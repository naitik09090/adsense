import React, { useEffect } from "react";

const AdComponent = () => {
    useEffect(() => {
        const initAd = () => {
            try {
                if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } else {
                    // Script not loaded yet, retry in 500ms
                    setTimeout(initAd, 500);
                }
            } catch (e) {
                console.error("Adsense Error:", e);
            }
        };

        initAd();
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7321314791981564"
            data-ad-slot="5646736708"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default AdComponent;