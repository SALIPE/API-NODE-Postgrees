const Produtos = require("../models/Produtos");

module.exports ={
    async store(req,res){
        const { prod_descricao,
                prod_marca,
                prod_nome_peca,
                prod_modelo_peca} = req.body;

        const produto = await Produtos.create({
            prod_descricao,
            prod_marca,
            prod_nome_peca,
            prod_modelo_peca});

        return res.json(produto);
    },

    async index(req,res){
        const produto = await Produtos.findAll();

        return res.json(produto);
    }
};