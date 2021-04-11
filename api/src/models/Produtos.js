const {Model, DataTypes} = require('sequelize');


class TbProdutos extends Model{
    static init(sequelize){
        super.init({
            prod_descricao: DataTypes.STRING,
            prod_marca: DataTypes.STRING,
            prod_nome_peca: DataTypes.STRING,
            prod_modelo_peca: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = TbProdutos;