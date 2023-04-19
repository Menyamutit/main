
const Router = require('express')
const ProductsController = require('../controller/ProductsController.js')
const EmployeesController = require('../controller/EmployeesController.js')
const ProcessesServiceController = require('../controller/ProcessesServiceController.js')
const ProductsProcessesController = require('../controller/ProductsProcessesController.js')
const PositionsController = require('../controller/PositionsController.js')
const ProcessesController = require('../controller/ProcessesController.js')
const StorageFFController = require('../controller/StorageFFController.js')

const router = new Router()
// ProductsProcesses
router.post("/procesitem", ProductsProcessesController.add)
router.get("/procesitem", ProductsProcessesController.getAll)
// router.get('/procesitem/user', ProductsProcessesController.find)
// router.get("/procesitem/accept", ProductsProcessesController.getAll)
// router.get('/procesitem/proces', ProductsProcessesController.find)
// router.get("i/procesitem/servproces", ProductsProcessesController.getAll)
// router.get('/procesitem/delivmp', ProductsProcessesController.find)
// router.get("/procesitem/boxes", ProductsProcessesController.getAll)
// router.get('/procesitem/tasks', ProductsProcessesController.find)
// router.get("/procesitem", ProductsProcessesController.getAll)
// router.get('procesitem/item', ProductsProcessesController.find)
router.get("/procesitem/find?", ProductsProcessesController.getProd)
router.get('/procesitem/:id', ProductsProcessesController.find)
router.put("/procesitem/:id", ProductsProcessesController.update)
router.delete("/procesitem/:id", ProductsProcessesController.delete)

// ProcessesService
router.post("/servproces", ProcessesServiceController.add)
router.get("/servproces", ProcessesServiceController.getAll)
// router.get('/servproces/procesitem', ProcessesServiceController.getProc)
// router.get("/servproces/tasks", ProcessesServiceController.getTask)
router.get('/servproces/find?', ProcessesServiceController.getProc)
router.get("/servproces/:id", ProcessesServiceController.find)
router.put("/servproces/:id", ProcessesServiceController.update)
router.delete("/servproces/:id", ProcessesServiceController.delete)

// Employees
router.post("/empl", EmployeesController.add)
router.get("/empl", EmployeesController.getAll)
// router.get("/empl/storageff", EmployeesController.getStorageff)
// router.get("/empl/position", EmployeesController.getPosition)
// router.get("/empl/tasks", EmployeesController.getTasks)
router.get("/empl/find?", EmployeesController.getEmpl)
router.get('/empl/:id', EmployeesController.find)
router.put("/empl/:id", EmployeesController.update)
router.delete("/empl/:id", EmployeesController.delete)

// Products
router.post("/item", ProductsController.add)
router.get("/item", ProductsController.getAll)
// router.get('/item/user', ProductsController.find)
// router.get("/item/accept", ProductsController.getAll)
// router.get('/item/procesitem', ProductsController.find)
router.get("/organiz?", ProductsController.getProd)
router.get('/item/:id', ProductsController.find)
router.put("/item/:id", ProductsController.update)
router.delete("/item/:id", ProductsController.delete)

// Positions
router.post("/position", PositionsController.add)
router.get("/position", PositionsController.getAll)
// router.get('/position/empl', PositionsController.getEmpl)
router.get("/position/find?", PositionsController.getPos)
router.get("/position/:id", PositionsController.find)
router.put("/position/:id", PositionsController.update)
router.delete("/position/:id", PositionsController.delete)

// Processes
router.post("/proces", ProcessesController.add)
router.get("/proces", ProcessesController.getAll)
// router.get('/proces/procesitem', ProcessesController.getProc)
// router.get("/proces/user", ProcessesController.getUser)
router.get('/proces/find?', ProcessesController.getProc)
router.get('/proces/:id', ProcessesController.find);
router.put("/proces/:id", ProcessesController.update)
router.delete("/proces/:id", ProcessesController.delete)

// StorageFF
router.post("/storageff", StorageFFController.add)
router.get("/storageff", StorageFFController.getAll)
// router.get('/storageff/empl', StorageFFController.find)
// router.get('/storageff/accept', StorageFFController.find)
router.get("/storageff/find?", StorageFFController.getStorageFF)
router.get('/storageff/:id', StorageFFController.find)
router.put("/storageff/:id", StorageFFController.update)
router.delete("/storageff/:id", StorageFFController.delete)


module.exports = router