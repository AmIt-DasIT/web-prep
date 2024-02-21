export function hexToRgb(hex: string) {
    // Remove '#' if present
    hex = hex.replace('#', '');
    
    // Parse hex values to separate R, G, B components
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    // Return RGB object
    return { r, g, b };
}


export function hexToHsl(hex: string) {
    // Convert hex to RGB first
    let { r, g, b } = hexToRgb(hex);
    
    // Convert RGB to HSL
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        // @ts-ignore
        h /= 6;
    }
    
        // @ts-ignore
    // Return HSL object
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
