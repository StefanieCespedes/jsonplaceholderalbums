const colors = {
    'brown': 'a52a2a',
    'aquamarine': '7fffd4',
    'aqua': '00ffff',
    'azure': 'f0ffff',
    'beige': 'f5f5dc',
    'black': '000000',
    'blanchedalmond': 'ffebcd',
    'blue': '0000ff',
    'blueviolet': '8a2be2',
    'bisque': 'ffe4c4',
}

const colorsArray = Object.values(colors);

export const getCoverPicture = (id: number) => (`https://via.placeholder.com/150/${colorsArray[id - 1]}`);
