import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/contato'
import * as S from './styles'
import * as enums from '../../util/enums/Tarefa'
import { RootState } from '../../store'

type Props = {
    ativo?: boolean
    legenda: string
    criterio: 'prioridade' | 'status' | 'todas'
    valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
    const dispatch = useDispatch()
    const { filtro, itens: contatos } = useSelector((state: RootState) => state.contatos)

const verificarEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
}

const contarContatos = () => {
    if (criterio === 'todas') return contatos.length
    if (criterio === 'prioridade') {
        return contatos.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
        return contatos.filter((item) => item.status === valor).length
    }
    return 0
}

const filtrar = () => {
    dispatch(
        alterarFiltro({
            criterio,
            valor,
            termo: ''
        })
    )
}

const contador = contarContatos()
const ativo = verificarEstaAtivo()

return (
    <S.Card ativo={ativo} onClick={filtrar}>
        <S.Contador>{contador}</S.Contador>
        <S.Label>{legenda}</S.Label>
    </S.Card>
    )
}

export default FiltroCard
