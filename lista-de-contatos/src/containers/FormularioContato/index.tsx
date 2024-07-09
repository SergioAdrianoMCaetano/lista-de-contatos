import { FormEvent, SetStateAction, useState } from 'react'

import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'

import { Form, Campo, Opcao, Opcoes } from './styles'

import { adicionarContato } from '../../store/reducers/contato'

import * as enums from '../../util/enums/Tarefa'

const FormularioContato = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [, setPrioridade] = useState(enums.Prioridade.NORMAL)

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault()
        dispatch(adicionarContato({
            nomeCompleto, email, telefone, status: enums.Status.PENDENTE,
            prioridade: enums.Prioridade.URGENTE
        }))
        navigate('/')
    }

    return (
        <MainContainer>
            <Titulo>Novo Contato</Titulo>
            <Form onSubmit={cadastrarContato}>
                <Campo 
                    value={nomeCompleto}
                    onChange={(e: { target: { value: SetStateAction<string> } }) => setNomeCompleto(e.target.value)}
                    type="text"
                    placeholder="Nome Completo"
                />
                <Campo 
                    value={email}
                    onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
                    type="email"
                    placeholder="E-mail"
                />
                <Campo 
                    value={telefone}
                    onChange={(e: { target: { value: SetStateAction<string> } }) => setTelefone(e.target.value)}
                    type="tel"
                    placeholder="Telefone"
                />
                <Opcoes>
                <p>Prioridades</p>
                {Object.values(enums.Prioridade).map((prioridade) => (
                    <Opcao key={prioridade}>
                    <input
                        value={prioridade}
                        name="prioridade"
                        type="radio"
                        onChange={(evento) =>
                        setPrioridade(evento.target.value as enums.Prioridade)
                        }
                        id={prioridade}
                        defaultChecked={prioridade === enums.Prioridade.NORMAL}
                    />{' '}
                    <label htmlFor={prioridade}>{prioridade}</label>
                        </Opcao>
                    ))}
                </Opcoes>
                <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
            </Form>
        </MainContainer>
    )
}

export default FormularioContato