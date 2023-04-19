const serviceEmployees = require('../services/serviceEmployees.js')

class EmployeesController {

    // Добавление
    async add(req, res) {
        try {
            return res.status(200).json(await serviceEmployees.add(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
    // Получение всего
    async getAll(req, res) {
        try {
            return res.json(await serviceEmployees.getAll());
        } catch (e) {
            console.log(e);
        }
    }
    // async getStorageff(req, res) {
    //     try {
    //         const emplId = req.body._id;
    //         const result = await serviceEmployees.get(emplId);
    //         const { id, name } = result;
    //         res.status(200).json({ id, name });
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).json({ message: "Ошибка сервера" });
    //     }
    // }
    // async getPosition(req, res) {
    //     try {
    //         const emplId = req.body.id;
    //         const result = await serviceEmployees.get(emplId);
    //         const { id, idPosition } = result;
    //         res.status(200).json({ id, idPosition });
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).json({ message: "Ошибка сервера" });
    //     }
    // }
    // async getTasks(req, res) {
    //     try {
    //         const emplId = req.body.id;
    //         const result = await serviceEmployees.get(emplId);
    //         const { id, idTasks } = result;
    //         res.status(200).json({ id, idTasks });
    //     } catch (e) {
    //         console.log(e);
    //         res.status(500).json({ message: "Ошибка сервера" });
    //     }
    // }

    // Фильтрация
    async getEmpl(req, res) {
        try {
            const query = req.query;
            console.log(query);
            const result = res.status(200).json(await serviceEmployees.getEmpl(query))
            res.status(200).json(result)
        } catch (e) {
            console.log(e)
        }
    }
    // Поиск
    async find(req, res) {
        try {
            const { id } = req.params
            const result = res.status(200).json(await serviceEmployees.find(id))
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
            return res.status(200).json(await serviceEmployees.update(id, req.body))
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
            res.status(200).json(await serviceEmployees.delete(id))
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new EmployeesController()

