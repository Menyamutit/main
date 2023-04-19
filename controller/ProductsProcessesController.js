const serviceProductsProcesses = require('../services/serviceProductsProcesses.js')

class ProductsProcessesController {

    // Добавление
    async add(req, res) {
        try {
            return res.status(200).json(await serviceProductsProcesses.add(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
    // Получение всего
    async getAll(req, res) {
        try {
            return res.json(await serviceProductsProcesses.getAll());
        } catch (e) {
            console.log(e);
        }
    }
    // фильтрация
    async getProd(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await serviceProductsProcesses.getProd(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
    // Поиск
    async find(req, res) {
        try {
            const { id } = req.params
            const result = res.status(200).json(await serviceProductsProcesses.find(id))
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
            return res.status(200).json(await serviceProductsProcesses.update(id, req.body))
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
            res.status(200).json(await serviceProductsProcesses.delete(id))
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new ProductsProcessesController()

