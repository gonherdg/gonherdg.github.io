import React, { useEffect, useState } from "react";

const Main = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    return (
        <div className="App">
            <div className="Main">
                This is the text that will show the privacy policy.
            </div>
        </div>
    );
}