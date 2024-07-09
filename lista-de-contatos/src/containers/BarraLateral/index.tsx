import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard/'
import * as S from './styles'
import * as enums from '../../util/enums/Tarefa'
import { RootState } from '../../store'
import { alterarTermo } from '../../store/reducers/contato'
import { Botao, Campo } from '../../styles'

type Props = {
    mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { termo } = useSelector((state: RootState) => state.contatos.filtro)

    return (
        <S.Aside>
            <div>
                {mostrarFiltro ? (
                <>
                    <Campo
                    type="text"
                    placeholder="Buscar"
                    value={termo}
                    onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
                    />
                    <S.Filtros>
                        <FiltroCard
                            valor={enums.Status.PENDENTE}
                            criterio="status"
                            legenda="pendente"
                        />
                        <FiltroCard
                            valor={enums.Status.CONCLUIDO}
                            criterio="status"
                            legenda="concluída"
                        />
                        <FiltroCard
                            valor={enums.Status.EM_ANDAMENTO}
                            criterio="status"
                            legenda="em andamento"
                        />
                        <FiltroCard
                            valor={enums.Prioridade.URGENTE}
                            criterio="prioridade"
                            legenda="urgente"
                        />
                        <FiltroCard
                            valor={enums.Prioridade.IMPORTANTE}
                            criterio="prioridade"
                            legenda="importante"
                        />
                        <FiltroCard
                            valor={enums.Prioridade.NORMAL}
                            criterio="prioridade"
                            legenda="normal"
                        />
                        <FiltroCard criterio="todas" legenda="todas" />
                    </S.Filtros>
                </>
                ) : (
                <Botao onClick={() => navigate('/')}>
                    Voltar à sessão de contatos
                </Botao>
                )}
            </div>
        </S.Aside>
    )
}

export default BarraLateral
