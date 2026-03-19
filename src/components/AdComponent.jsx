import React, { useEffect } from "react";

const AdComponent = () => {
    useEffect(() => {
        try {
            // Check if adsbygoogle is defined and actually push
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("Adsense Error:", e);
        }
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