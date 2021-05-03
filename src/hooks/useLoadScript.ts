import { useEffect, useState } from 'react';

interface LoadDynamicScript {
    id: string;
    src: string;
    async?: boolean;
}

export const useLoadScript = ({
    id,
    src,
    async,
}: LoadDynamicScript) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);

    useEffect(() => {
        const existingScript = document.getElementById(id) as HTMLScriptElement | null;

        if (existingScript !== null) {
            if (existingScript.src === src) {
                setIsScriptLoaded(true);
                return;
            }
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = id;
        script.async = async ?? true;
        script.src = src;

        script.onload = () => {
            setIsScriptLoaded(true);
        };

        document.body.appendChild(script);
    }, [id, src]);

    return [isScriptLoaded];
};
