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

const deleteBruxo = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

const idParaApagar = parseInt(id)

const BruxoParaRemover = bruxos.find(b => b.id === idParaApagar);

if (!BruxoParaRemover) {
    return res.status(404).json({
        success: false,
        message: "Bruxo id não existe"
    });
}
const BruxoFiltrado = bruxos.filter(b => b.id !== id);

bruxos.splice(0, bruxos.length, ...BruxoFiltrado);

return res.status(200).json({
    success: true,
    message: "Bruxo expulso de Hogwarts com sucesso!"
})
}

const updateBruxo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, casa, ano, varinha, mascote, patrono, especialidade } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const BruxosExiste = bruxos.find(b => b.id === id);

    if (!BruxosExiste) {
        return res.status(404).json({
            success: false,
            message: "Não é possível reparar o que não existe!"
        });
    }

const BruxosAtualizados = bruxos.map(bruxos =>
    bruxos.id === id
        ? {
            ...bruxos,
            ...(nome && { nome }),
            ...(casa && { casa }),
            ...(ano && { ano }),
            ...(varinha && { varinha }),
            ...(mascote && { mascote }),
            ...(patrono && { patrono }),
            ...(especialidade && { especialidade }),
        }
        : bruxos
);

bruxos.splice(0, bruxos.length, ...BruxosAtualizados);

const BruxosAtualizado = bruxos.find(b => b.id === id);

res.status(200).json({
    success: true,
    message: "Bruxo atualizado com sucesso",
    bruxo: BruxosAtualizado
})
}

export {getAllBruxos, getBruxosById, createBruxos, deleteBruxo, updateBruxo};