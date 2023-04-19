const serviceProcesses = require('../services/serviceProcesses.js')

class ProcessesController {

    // Добавление
    async add(req, res) {
        try {
            return res.status(200).json(await serviceProcesses.add(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
    // Получение всего
    async getAll(req, res) {
        try {
            return res.json(await serviceProcesses.getAll());
        } catch (e) {
            console.log(e);
        }
    }
    // фильтрация
    async getProc(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await serviceProcesses.getProc(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
    // Поиск
    async find(req, res) {
        try {
            const { id } = req.params
            const result = res.status(200).json(await serviceProcesses.find(id))
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
            return res.status(200).json(await serviceProcesses.update(id, req.body))
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
            res.status(200).json(await serviceProcesses.delete(id))
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new ProcessesController()

