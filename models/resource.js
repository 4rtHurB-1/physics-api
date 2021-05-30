const { Model } = require('sequelize');

class Resource extends Model {
    static associate (models) {
        Resource.hasMany(models.Material, {
            foreignKey: 'resource_id'
        });
    }
}

module.exports = function (sequelize, DataTypes) {
    Resource.init({
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
        type: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.TEXT,
        },
        data: {
            type: DataTypes.JSONB,
        },
        url: {
            type: DataTypes.STRING,
        }

    }, {
        sequelize,
        tableName: 'resources',
        timestamps: false
    });

    return Resource;
}