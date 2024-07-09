import BarraLateral from '../../containers/BarraLateral'
import FormularioContato from '../../containers/FormularioContato'

const CadastroContato = () => (
    <>
        <BarraLateral mostrarFiltro={false} />
        <FormularioContato />
    </>
)

export default CadastroContato