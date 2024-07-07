// utils/createInitialsImage.js

export const createInitialsImage = (name, size = 100, bgColor = '#000', textColor = '#FFF') => {
    const initials = name.split(' ').map(name => name[0]).join('');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;

    // Set background color
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set text style
    context.font = `${size / 3}px Arial`;
    context.fillStyle = textColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Draw text
    context.fillText(initials, size / 2, size / 2);

    // Get data URL of the image
    return canvas.toDataURL();
  };
