const { Model } = require('sequelize');
const models = require('./index');

class Theme extends Model {
    static associate (models) {
        Theme.hasMany(models.Material, {
            foreignKey: 'theme_id'
        });
    }
}

module.exports = function (sequelize, DataTypes) {
    Theme.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
    }, {
        sequelize,
        tableName: 'themes',
        timestamps: false,
    });

    return Theme;
}