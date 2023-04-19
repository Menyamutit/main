const StorageFF = require('../shema/StorageFF.js')



class serviceStorageFF {
    //    Добавлене склада сотрудника в бд
    async add(StorageFFData) {
        const keys = Object.keys(StorageFFData);
        const number = keys.length;
        const StorageFFKeys = Object.keys(StorageFF.schema.obj);
        if (number != StorageFFKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in StorageFFData) {
            if (StorageFFData[key] == null || StorageFFData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await StorageFF.create(StorageFFData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех складов из бд
    async getAll() {
        return await StorageFF.find();
    }
    // Фильтрация
    async getStorFF(query) {
        const result = await StorageFF.find(query)
        if (!result) {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Получение списка всех найденных складов из бд
    async find(id) {
        const result = await StorageFF.find(IDBRequest)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Редактирование склада
    async update(id, StorageFFData) {
        if (!id) {
            return "ID не указан"
        }
        const result = await StorageFF.findByIdAndUpdate(id, StorageFFData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(StorageFFData);
        const number = keys.length;
        const StorageFFKeys = Object.keys(StorageFF.schema.obj);
        if (number - 1 != StorageFFKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление склада из БД
    async delete(id) {
        const result = await StorageFF.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new serviceStorageFF();