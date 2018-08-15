const fs = require('fs');

let data = '';
let base = 2;
for (let i = 1; i <= 10; i++) {

    data += `${base} * ${i} = ${base *1 }\n`;

}


fs.writeFile('Prueba.txt', data, (err) => {
    if (err) throw err;

    console.log('El archivo se creo');
});