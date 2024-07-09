import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { editarContato, removerContato } from '../../store/reducers/contato'

import ContatoModel from '../../models/Contato'

import * as S from './styles'

import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../util/enums/Tarefa'

type Props = ContatoModel

const Contato = ({ nomeCompleto, email, telefone, id, prioridade, status } : Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState(nomeCompleto)
    const [emailContato, setEmail] = useState(email)
    const [telefoneContato, setTelefone] = useState(telefone)

    useEffect(() => {
        setNome(nomeCompleto)
        setEmail(email)
        setTelefone(telefone)
    }, [nomeCompleto, email, telefone])

    const cancelarEdicao = () => {
        setEstaEditando(false)
        setNome(nomeCompleto)
        setEmail(email)
        setTelefone(telefone)
    }

    const salvarEdicao = () => {
        dispatch(editarContato({
            nomeCompleto: nome, email: emailContato, telefone: telefoneContato, id,
            prioridade: enums.Prioridade.URGENTE,
            status: enums.Status.PENDENTE
        }))
        setEstaEditando(false)
    }

    return (
        <S.Card>
            {estaEditando ? (
                <>
                    <S.Campo type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                    <S.Campo type="text"
                    value={emailContato}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.Campo type="text"
                    value={telefoneContato}
                    onChange={(e) => setTelefone(e.target.value)}
                    />
                    <S.Tag parametro="prioridade" prioridade={prioridade}>
                        {prioridade}
                    </S.Tag>
                    <S.Tag parametro="status" status={status}>
                        {status}
                    </S.Tag>
                    <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
                    <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
                </>
            ) : (
                <>
                    <S.Titulo>{nomeCompleto}</S.Titulo>
                    <S.Detalhe>{email}</S.Detalhe>
                    <S.Detalhe>{telefone}</S.Detalhe>
                    <S.Tag parametro="prioridade" prioridade={prioridade}>
                        {prioridade}
                    </S.Tag>
                    <S.Tag parametro="status" status={status}>
                        {status}
                    </S.Tag>
                    <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                    <S.BotaoCancelar onClick={() => dispatch(removerContato(id))}>Remover</S.BotaoCancelar>
                </>
            )}
        </S.Card>
    )
}

export default Contato