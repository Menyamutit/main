const servicePositions = require('../services/servicePositions.js')

class PositionsController {

    // Добавление
    async add(req, res) {
        try {
            return res.status(200).json(await servicePositions.add(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
    // Получение всего
    async getAll(req, res) {
        try {
            return res.json(await servicePositions.getAll());
        } catch (e) {
            console.log(e);
        }
    }
    // async getEmpl(req, res) {
    //     try {
    //         const posId = req.body.id;
    //         const result = await servicePositions.get(posId);
    //         const { id, idEmployee } = result;
    //         res.status(200).json({ id, idEmployee });
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).json({ message: "Ошибка сервера" });
    //     }
    // }
    // Фильтрация 
    async getPos(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await servicePositions.getPos(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
    // Поиск
    async find(req, res) {
        try {
            const { id } = req.params
            const result = res.status(200).json(await servicePositions.find(id))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
    // Редактирование
    async update(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json("ID не указан")
            }
            return res.status(200).json(await servicePositions.update(id, req.body))
        } catch (e) {
            console.log(e);
        }
    }
    // Удаление
    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json("ID не указан")
            }
            res.status(200).json(await servicePositions.delete(id))
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new PositionsController()

