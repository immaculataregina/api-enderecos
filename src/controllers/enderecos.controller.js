'use strict'

require('dotenv').config();
// const Error = require('../utils/errors');

const EnderecosModel = require('../models/enderecos.model');

exports.cadastrarEndereco = async (req, res) => {

    const schema = req.headers.schema

    // Endereço
    const cep = req.body.cep
    const logradouro = req.body.logradouro
    const ibge = req.body.ibge
    const numero = req.body.numero
    const complemento = req.body.complemento
    const bairro = req.body.bairro

    try {


        // Insere endereço
        const objInsert = {
            cep,
            logradouro,
            ibge,
            numero,
            complemento,
            bairro
        }

        const novoEndereco = await EnderecosModel.cadastrarEndereco(
            objInsert,
            schema
        )

        res.status(200).json({ message: 'Cadastro realizado com sucesso!', 
            result: true, 
            novoEndereco 
        })

    } catch (error) {
        res.status(500).json({ error })
    }


}