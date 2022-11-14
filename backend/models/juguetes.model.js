const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Juguete = sequelize.define("juguete", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        }
    });

    return Juguete;
};