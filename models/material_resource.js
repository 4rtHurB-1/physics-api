const { Model } = require('sequelize');

class MaterialResource extends Model {

}

module.exports = function (sequelize, DataTypes) {
    MaterialResource.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        resource_id: {
            type: DataTypes.INTEGER,
        },
        material_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        tableName: 'material_resources',
        timestamps: false
    });

    return MaterialResource;
}