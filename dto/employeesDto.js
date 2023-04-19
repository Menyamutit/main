module.exports = class employeesDto {
    surname;
    name;
    patronymic;
    login;
    email;
    numberPhone;
    password;
    photo;

    constructor(model) {
        this.surname = model.surname;
        this.name = model.name;
        this.patronymic = model.patronymic;
        this.login = model.login;
        this.email = model.email;
        this.numberPhone = model.numberPhone;
        this.password = model.password;
        this.photo = model.photo;
    }
};
