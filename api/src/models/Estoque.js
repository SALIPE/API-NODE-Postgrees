const {Model, DataTypes} = require('sequelize');


class TbEstoque extends Model{
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            setor: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.TbProdutos, { foreignKey: 'prod_id', as: 'produto'});
    }
}

module.exports = TbEstoque;