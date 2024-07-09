import ListaDeContatos from '../../containers/ListaDeContatos'

import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'

const Home = () => (
    <>
        <BarraLateral mostrarFiltro/>
        <ListaDeContatos />
        <BotaoAdicionar />
    </>
)

export default Home