 const blendModes = [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
const randomize = document.querySelector('.randomize-button');
const reset = document.querySelector('.reset-button');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomizeColors() {
    const backgroundColor = getRandomColor();
    const textColor = getRandomColor();
    const linkColor = getRandomColor();
    
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = linkColor;
    });

    const images = document.querySelectorAll('img');
    images.forEach(image => {
        const randomBlendMode = blendModes[Math.floor(Math.random() * blendModes.length)];
        image.style.mixBlendMode = randomBlendMode;
    });
    
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('linkColor', linkColor);
}

function resetColors() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = '';
    });

    const images = document.querySelectorAll('img');
    images.forEach(image => {
    image.style.mixBlendMode = '';
    });

    localStorage.removeItem('backgroundColor');
    localStorage.removeItem('textColor');
    localStorage.removeItem('linkColor');
}

function applySavedColors() {
    const backgroundColor = localStorage.getItem('backgroundColor');
    const textColor = localStorage.getItem('textColor');
    const linkColor = localStorage.getItem('linkColor');

    if (backgroundColor) document.body.style.backgroundColor = backgroundColor;
    if (textColor) document.body.style.color = textColor;
    if (linkColor) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = linkColor;
        });
    }
}

applySavedColors();
randomize.addEventListener('click', randomizeColors);
reset.addEventListener('click', resetColors);
