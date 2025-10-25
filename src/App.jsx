
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav /> 
        <Routes>
           <Route path="/" element= {<ItemListContainer />} />
           {/*<Route path="/detail/:id" element={}/> */} *ojo element={}: Aquí deberías colocar el componente que se renderiza cuando se accede a esa ruta. Por ejemplo:

        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App;


