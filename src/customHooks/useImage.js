import { useEffect, useState } from "react";

export const useImage = (fileName) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`${fileName}`);
                //const o = await require(`${fileName}`).name;
                setImage(response.default);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
                console.log("FIN");
            }
        };

        fetchImage();
    }, [fileName]);

    return {
        loading,
        error,
        image,
    };
};
