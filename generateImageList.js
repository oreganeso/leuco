const fs = require('fs');
const path = require('path');

// Cambia esta ruta a la carpeta que contiene tus subcarpetas de imágenes
const baseDir = path.join(__dirname, 'img');

const categories = {
    "teleferico": "teleferico",
    "tito": "tito",
    "parqueninos": "parqueninos",
    "botanico": "botanico",
    "Shushi": "Sushi",
    "ratas": "ratas",
    "anborguesa": "anborguesa",
    "Yuca": "Yuca",
    "aesthetic": "aesthetic",
    "art": "art",
    "Cine": "Cine",
    "cumples": "cumples",
    "dulce": "dulce",
    "grado": "grado",
    "modo fiesta": "modo fiesta",
    "parque diversiones": "parque diversiones",
    "rutas": "rutas",
};

const images = {};

for (const [categoryName, folderName] of Object.entries(categories)) {
    const folderPath = path.join(baseDir, folderName);
    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        images[categoryName] = files.map(file => path.join('img', folderName, file));
    }
}

// Generar el código como un string
const output = `const images = ${JSON.stringify(images, null, 4)};`;

// Guardar el resultado en un archivo
fs.writeFileSync(path.join(__dirname, 'outputImages.js'), output);
console.log('El archivo outputImages.js ha sido creado con las rutas de las imágenes.');
