import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Estilo Global
import "./style/global.css"

// Componentes
import Home from './Home';
import NovoProduto from './components/cadastrar-item/novo-produto';
import Clientes from './pages/clientes/clientes';
import ClienteEditar from './pages/cliente-editar/cliente-editar'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/clientes/novo' element={<ClienteEditar />} />
        <Route path='/cadastro-produto/novo' element={<NovoProduto />} />
      </Routes>
    </BrowserRouter>

    // <div className="Loja">
    //   <Home />
    // </div>
  );
};

export default App;
