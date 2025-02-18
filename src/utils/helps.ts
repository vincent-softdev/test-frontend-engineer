export const parseImageUrl = (images: string[]): string => {
    try {
        const parsedImages = JSON.parse(images[0]);
        return Array.isArray(parsedImages) ? parsedImages[0] : "";
    } catch (error) {
        console.error("Error parsing image URL:", error);
        return "";
    }
};