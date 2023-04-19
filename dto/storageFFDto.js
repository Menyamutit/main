module.exports = class storageFFDto {
    regionStorageFF;
    towerStorageFF;
    indexStorageFF;
    adressStorageFF;
    numberStorageFF;

    constructor(model) {
        this.regionStorageFF = model.regionStorageFF;
        this.towerStorageFF = model.towerStorageFF;
        this.indexStorageFF = model.indexStorageFF;
        this.adressStorageFF = model.adressStorageFF;
        this.numberStorageFF = model.numberStorageFF;
    }
};
