const Estoque = require("../models/Estoque");
const Produto = require("../models/Produtos");

module.exports ={
    async store(req,res){
        const { prod_id,
                quantidade,
                setor} = req.body;

        const produto = await Produto.findByPk(prod_id);

        if(!produto) {
            return res.status(400).json({error: 'Produto não existente!'});
        }

        const estoque = await Estoque.create({
            prod_id,
            quantidade,
            setor});

        return res.json(estoque);
    },

    // async index(req,res){
    //     const produto = await Produtos.findAll();

    //     return res.json(produto);
    // }
};