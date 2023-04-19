// Склада ФФ
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storageFFShema = new Schema ({
    // Регион
    regionStorageFF: {
        type: String,
        require: true,
        max: 50
    },
    // Город
    towerStorageFF: {
        type: String,
        require: true,
        max: 50
    },
    // Индекс
    indexStorageFF: {
        type: Number,
        require: true,
        min: 5,
        max: 6
    },
    // Адрес
    adressStorageFF: {
        type: String,
        require: true,
        max: 150
    },
    // Номер телефона
    numberStorageFF: {
        type: String,
        require: true,
        max: 20
    }
})

module.exports = mongoose.model('storageFF',storageFFShema)