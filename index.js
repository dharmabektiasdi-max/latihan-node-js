const fs = require ('fs');

const path = require('path');

const filePath = path.join(__dirname, 'note.txt'); 

// 1.Tulis File
fs.writeFileSync(filePath, 'Belajar Node.js itu menyenangkan!');
console.log('File berhasil dibuat di:', filePath);

// 2.Baca File
const isiFile = fs.readFileSync(filePath, 'utf-8');
console.log('Isi file:', isiFile);