import './Componentes/CSS/main.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContextProvider from './Componentes/Context';
import Home from './Componentes/Home';
import Servicios from './Componentes/Servicios';
import ServicioRedirect from './Componentes/Servicios/ServicioRedirect';
import Educativo from './Componentes/Educativo';
import Portal from './Componentes/Portal';

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Servicios/' element={<Servicios />} />
            <Route path='/Servicios/:service' element={<ServicioRedirect />} />
            <Route path='/Educativo/' element={<Educativo />} />
            <Route path='/Portal/' element={<Portal />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
