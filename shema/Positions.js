// Должности
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionsShema = new Schema ({
    // Название должжности
    namePosition: {
        type: String,
        required: true,
        max: 50
    },
    // График
    schedule: {
        type: String,
        required: true
    },
    // тип оплаты
    typePayment: {
        type: String,
        enum: ['Поколичественная', 'Почасовая'],
        default: "",
        require: true
    },
    // Размрность типа оплаты
    dimensionalityTypePayment: {
      type: Number,
      require: true
    },
    // Заработная плата за размерность
    salaryDimensionality: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('positions',positionsShema)