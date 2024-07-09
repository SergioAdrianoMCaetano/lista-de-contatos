import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootState } from '../../store'

const ListaDeContatos = () => {
    const contatos = useSelector((state: RootState) => state.contatos.itens)

    return (
        <MainContainer>
            <Titulo>Lista de Contatos</Titulo>
            <ul>
                {contatos.map((contato) => (
                    <li key={contato.id}>
                        <Contato {...contato} />
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default ListaDeContatos