// Товар в обработку
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsProcessesShema = new Schema ({
    // Статус
    status: {
        type: String,
        enum: ['вариант 1', 'варинат 2', 'вариант 3', 'вариант 4'],
        default: "",
        require: true
    },
    // Товары
    idProducts: {
        ref: 'products',
        type: Schema.Types.ObjectId
    },
    // Вид маркетплейса
    typeMP: {
        type: String,
        enum: ['Wildberries', 'OZON', 'Яндекс.Маркет', 'Сбермаркет'],
        default: "",
        require: true
    },
    // Вид товара
    typeProduct: {
        type: String,
        enum: ['Одежда', 'Товар'],
        default: "",
        require: true
    },
    // Фото
    photoProcessing: {
        type: String,
        default: ''
    },
    // Количество ожидаемое
    quantityExpected: {
        //передаётся сумма всех товаров что лежат в приёмке
        type: Number,
        require: true
    },
    // Количество фактическое
    quantityActual: {
        type: Number,
    },
    // обработка
    idProcesses: {
        ref: 'processes',
        type: Schema.Types.ObjectId
    },
    // Приёмки
    idAcceptances: {
        ref: 'acceptances',
        type: Schema.Types.ObjectId
    },
    // Размерный ряд(41, 42 ...)
    sizeRange: {
        type: Number,
    },
    // Ширина
    width: {
        // переёдаётся из приёмки, товаров что в данный момент обрабатываются
        type: Number,
        require: true
    },
    // Высота
    height: {
        // переёдаётся из приёмки, товаров что в данный момент обрабатываются
        type: Number,
        require: true
    },
    // Глубина
    depth: {
        // переёдаётся из приёмки, товаров что в данный момент обрабатываются
        type: Number,
        require: true
    },
    // Вес
    weight: {
        // переёдаётся из приёмки, товаров что в данный момент обрабатываются
        type: Number,
        require: true
    },
    // Услуги обработок
    idProcessesServices: [{
        ref: 'processesService',
        type: Schema.Types.ObjectId
            //Узнать а что если эта переменная динамичная, service минимум, но может быть ещё тут услуги
    }],
    // Цена за работу
    priceProductProcessing: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('productsProcesses',productsProcessesShema)