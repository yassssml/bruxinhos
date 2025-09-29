import dados from '../models/dados.js';

const {bruxos} = dados;

const getAllBruxos = (req, res) => {
    let resultado = bruxos;

    res.status(200).json({
        total: resultado.length,
        data: resultado,
        message:"Lista de bruxos convocada com sucesso!"
    });
}


const getBruxosById = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const bruxo = bruxos.find(i => i.id === id);

    if (bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            success: false,
            message: "Nenhum bruxo foi encontrado no Beco Diagonal"
            });
        }
    }

    const createBruxos = (req, res) => {
        const { nome, casa, ano, varinha, mascote, patrono, especialidade } = req.body;
    
    if (!nome) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'nome' é obrigatório"
        });
    }

    if (!casa) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'casa' é obrigatório"
        });
    }

    if (!ano) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'ano' é obrigatório"
        });
    }

    if (!varinha) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'varinha' é obrigatório"
        });
    }

    if (!mascote) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'mascote' é obrigatório"
        });
    }

    if (!patrono) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'patrono' é obrigatório"
        });
    }
    if (!especialidade) {
        return res.status(400).json({
            success: false,
            message: "Feitiço mal executado! Verifique os ingredientes, o campo 'especialidade' é obrigatório"
        });
    }

    const novoBruxo = {
        id: bruxos.length + 1,
        nome: nome,
        casa: casa,
        ano: parseInt(ano),
        varinha: varinha,
        mascote: mascote,
        patrono: patrono,
        especialidade: especialidade
    }

    bruxos.push(novoBruxo);

    res.status(200).json({
        success: true,
        message: "Bruxo atualizado com sucesso!",
        bruxo: novoBruxo
    });
}

export {getAllBruxos, getBruxosById, createBruxos};