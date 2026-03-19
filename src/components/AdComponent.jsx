import React, { useEffect } from "react";

const AdComponent = () => {
    useEffect(() => {
        const initAd = () => {
            try {
                if (window.adsbygoogle) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } else {
                    console.warn("AdSense is being BLOCKED by your browser or an extension.");
                }
            } catch (e) {
                console.error("Adsense Error:", e);
            }

        };

        initAd();
    }, []);

    return (
        <div className="adsense-wrapper" style={{ minWidth: '100%', minHeight: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%" }}
                data-ad-client="ca-pub-7321314791981564"
                data-ad-slot="5646736708"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <div className="ad-placeholder-msg" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', marginTop: '5px' }}>
                AdSense Script Active
            </div>
        </div>
    );
};

export default AdComponent;