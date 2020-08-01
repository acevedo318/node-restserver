

/*
*Puerto
*/
process.env.PORT = process.env.PORT || 8080;

// ===================================
// Entorno
// ===================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===================================
// Vencimiento
// ===================================
process.env.CADUCIDAD_TOKEN =  60*60*24*30;

// ===================================
// Seed token
// ===================================
process.env.SEED = process.env.SEED || 'secret-token-20';

// ===================================
// Base de datos
// ===================================

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===================================
// Google client id
// ===================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '.apps.googleusercontent.com';