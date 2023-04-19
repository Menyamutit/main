module.exports = class processesDto {
    status;
    typeMP;
    idAcceptances;
    idProductsProcesses;
    dateInStorageFF;
    dateOutStorageFF;
    finalPriceProcessing;

    constructor(model) {
        this.status = model.status;
        this.typeMP = model.typeMP;
        this.idAcceptances = model.idAcceptances;
        this.idProductsProcesses = model.idProductsProcesses;
        this.dateInStorageFF = model.dateInStorageFF;
        this.dateOutStorageFF = model.dateOutStorageFF;
        this.finalPriceProcessing = model.finalPriceProcessing;
    }
};
