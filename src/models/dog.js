const Dog = (sequelize, DataTypes) =>
    sequelize.define("Dog", {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    });

module.exports = Dog;
