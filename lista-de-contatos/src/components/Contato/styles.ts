import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'

import * as enums from '../../util/enums/Tarefa'

type TagProps = {
    prioridade?: enums.Prioridade
    status?: enums.Status
    parametro: 'status' | 'prioridade'
}

function retornarCorDeFundo(props: TagProps): string {
    if (props.parametro === 'prioridade') {
        if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
        if (props.prioridade === enums.Prioridade.IMPORTANTE)
        return variaveis.amarelo
    } else {
        if (props.status === enums.Status.PENDENTE) return variaveis.amarelo2
        if (props.status === enums.Status.CONCLUIDO) return variaveis.verde
        if (props.status === enums.Status.EM_ANDAMENTO) return variaveis.cinza
    }
    return '#ccc'
}

export const Card = styled.div`
    background-color: #fcfcfc;
    padding: 16px;
    margin-bottom: 8px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Titulo = styled.h3`
    font-size: 18px;
    margin-bottom: 8px;
`

export const Detalhe = styled.p`
    font-size: 14px;
    margin-bottom: 4px;
`

export const Campo = styled.input`
    display: block;
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 1px solid ${variaveis.cinza};
`

export const BotaoCancelar = styled(Botao)`
    background-color: ${variaveis.vermelho};
`

export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    background-color: ${(props) => retornarCorDeFundo(props)};
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
`