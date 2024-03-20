import React, { useEffect, useState } from "react";

const Main = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    return (
        <div className="App">
            <div className="Main">
                Here will be the Siv presentation.
            </div>
        </div>
    );
}