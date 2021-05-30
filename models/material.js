const {Model} = require('sequelize');

class Material extends Model {
    static associate(models) {
        console.log('ass')
        Material.belongsToMany(models.Resource, {
            through: models.MaterialResource,
            foreignKey: 'material_id',
            otherKey: 'resource_id',
            as: 'Resources',
        });
        Material.belongsTo(models.Resource, {
            foreignKey: 'resource_id'
        });
        Material.belongsTo(models.Theme, {
            foreignKey: 'theme_id'
        });
    }
}

module.exports = function (sequelize, DataTypes) {
    Material.init({
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
        order: {
            type: DataTypes.INTEGER
        },
        next_material_id: {
            type: DataTypes.INTEGER,
        },
        theme_id: {
            type: DataTypes.INTEGER,
        },
        resource_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        tableName: 'materials',
        timestamps: false,
    });

    return Material;
}