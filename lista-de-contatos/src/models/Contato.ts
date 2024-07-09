import * as enums from '../util/enums/Tarefa'

class Contato {
    nomeCompleto: string
    email: string
    telefone: string
    id: number
    prioridade: enums.Prioridade
    status: enums.Status

    constructor(nomeCompleto: string, email: string, telefone: string, id: number, prioridade: enums.Prioridade, status: enums.Status){
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.telefone = telefone
        this.id = id
        this.prioridade = prioridade
        this.status = status
    }
}

export default Contato

