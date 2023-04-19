module.exports = class productsProcessesDto {
    status; 
    typeMP;
    typeProduct;
    photoProcessing;
    quantityExpected;
    quantityActual;
    sizeRange;
    width;
    height;
    depth;
    weight;
    priceProductProcessing;

    constructor(model) {
        this.status = model.status;
        this.typeMP = model.typeMP;
        this.typeProduct = model.typeProduct;
        this.photoProcessing = model.photoProcessing;
        this.quantityExpected = model.quantityExpected;
        this.quantityActual = model.quantityActual;
        this.sizeRange = model.sizeRange;
        this.width = model.width;
        this.height = model.height;
        this.depth = model.depth;
        this.weight = model.weight;
        this.priceProductProcessing = model.priceProductProcessing;
    }
};
