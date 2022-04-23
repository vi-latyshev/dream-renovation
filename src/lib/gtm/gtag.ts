interface GTMData {
    page?: string;
    formName?: string;
    formURL?: string;
}

interface GTMDataLayer extends GTMData {
    event: string;
}

declare global {
    interface Window {
        dataLayer?: GTMDataLayer[];
    }
}

export const gtag = (eventName: string, data: GTMData = {}) => {
    window.dataLayer?.push({
        event: eventName,
        ...data,
    });
};
