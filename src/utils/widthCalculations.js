export const calculateButtonWidth = (label) => {
    const labelLength = label.length;
    const minWidth = 50; // Minimum width
    const maxWidth = 290; // Maximum width
    const factor = 10;
    const calculatedWidth = Math.min(maxWidth, minWidth + labelLength * factor);
    return `${calculatedWidth}px`;
}