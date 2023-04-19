module.exports = class productsDto {
    idClietns;
    typeProduct;
    typeMP;
    barcodeProduct;
    supplierArticl;
    nameProduct;
    brand;
    photoProducts;
    colorProducts;
    sizeRange;
    width;
    height;
    depth;
    weight;
    compound;
    manufacturer;
    manufacturerCountry;
    adressManufacturer;
    dateOfManufacture;

    constructor(model) {
        this.idClietns = model.idClietns;
        this.typeProduct = model.typeProduct;
        this.typeMP = model.typeMP;
        this.barcodeProduct = model.barcodeProduct;
        this.supplierArticl = model.supplierArticl;
        this.nameProduct = model.nameProduct;
        this.brand = model.brand;
        this.photoProducts = model.photoProducts;
        this.colorProducts = model.colorProducts;
        this.sizeRange = model.sizeRange;
        this.width = model.width;
        this.height = model.height;
        this.depth = model.depth;
        this.weight = model.weight;
        this.compound = model.compound;
        this.manufacturer = model.manufacturer;
        this.manufacturerCountry = model.manufacturerCountry;
        this.adressManufacturer = model.adressManufacturer;
        this.dateOfManufacture = model.dateOfManufacture;
    }
};
