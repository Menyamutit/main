const Positions = require('../shema/Positions.js')



class servicePositions {
    //    Добавлене новой должности в бд
    async add(PositionsData) {
        const keys = Object.keys(PositionsData);
        const number = keys.length;
        const PositionsKeys = Object.keys(Positions.schema.obj);
        if (number != PositionsKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in PositionsData) {
            if (PositionsData[key] == null || PositionsData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await Positions.create(PositionsData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех должностей из бд
    async getAll() {
        return await Positions.find();
    }
    // Фильтрация
    async getPos(query) {
        const result = await Positions.find(query)
        if (!result) {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Получение списка найденных сотрудников из бд
    async find(id) {
        const result = await Positions.findById(id)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Редактирование должностей
    async update(id, PositionsData) {
        if (!id) {
            return "ID не указан"
        }
        const result = await Positions.findByIdAndUpdate(id, PositionsData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(PositionsData);
        const number = keys.length;
        const PositionsKeys = Object.keys(Positions.schema.obj);
        if (number != PositionsKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление должности из БД
    async delete(id) {
        const result = await Positions.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new servicePositions();