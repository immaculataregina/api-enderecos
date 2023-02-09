'use strict';

const db = require('../utils/db');


exports.cadastrarEndereco = async (obj, schema) => {
	try {

		// Cadastrar endereço
		const query =
			`
			INSERT INTO ${schema}.enderecos
			(cep, 
				logradouro, 
				ibge, 
				numero, 
				complemento, 
				bairro
			)
			VALUES
			('${obj.cep}', 
				'${obj.logradouro}', 
				${obj.ibge}, 
				'${obj.numero}', 
				'${obj.complemento}', 
				'${obj.bairro}' 
			)
			`;
		const outputEndereco = await db.executar(query);
		return outputEndereco[0];
	} catch (e) {
		throw new Error(e);
	}
}

exports.buscarPessoaPorCpf = async (cpf, schema) => {
	try {

		const query =
			`
			SELECT cpf 
			FROM ${schema}.pessoas
			WHERE cpf=${cpf}
			`;

		const output = await db.executar(query);
		return output;
	} catch (e) {
		throw new Error(e);
	}
}