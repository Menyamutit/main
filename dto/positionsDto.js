module.exports = class positionsDto {
    namePosition;
    schedule;
    dimensionalityTypePayment;
    salaryDimensionality;

    constructor(model) {
        this.namePosition = model.namePosition;
        this.schedule = model.schedule;
        this.dimensionalityTypePayment = model.dimensionalityTypePayment;
        this.salaryDimensionality = model.salaryDimensionality;
    }
};
