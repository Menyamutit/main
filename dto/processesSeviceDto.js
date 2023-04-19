module.exports = class processesServiceDto {
    typeService;
    nameService;
    servicePriceProceService;
    сommentProceService;
    typeMP;
    dateOutStorageFF;
    finalPriceProcessing;

    constructor(model) {
        this.typeService = model.typeService;
        this.nameService = model.nameService;
        this.servicePriceProceService = model.servicePriceProceService;
        this.сommentProceService = model.сommentProceService;
        this.typeMP = model.typeMP;
        this.dateOutStorageFF = model.dateOutStorageFF;
        this.finalPriceProcessing = model.finalPriceProcessing;
    }
};
