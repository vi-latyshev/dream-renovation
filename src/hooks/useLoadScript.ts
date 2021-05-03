import { useEffect, useState } from 'react';

interface LoadDynamicScript {
    id: string;
    src: string;
    async?: boolean;
    crossOrigin?: string;
}

export const useLoadScript = ({
    id,
    src,
    async = true,
    crossOrigin = 'anonymous',
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
        script.async = async;
        script.src = src;
        script.crossOrigin = crossOrigin;

        script.onload = () => {
            setIsScriptLoaded(true);
        };

        document.body.appendChild(script);
    }, [id, src]);

    return [isScriptLoaded];
};
