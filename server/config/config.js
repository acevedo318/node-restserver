

/*
*Puerto
*/
process.env.PORT = process.env.PORT || 8080;

// ===================================
// Entorno
// ===================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===================================
// Base de datos
// ===================================

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://strider:UZPaXQWNhfPtQ5Rm@vld2020.cqq1z.mongodb.net/cafe'
}

process.env.URLDB = urlDB;


