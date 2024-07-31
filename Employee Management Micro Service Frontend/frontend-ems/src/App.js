import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
    
    <HeaderComponent/>
    
    <BrowserRouter>

    <div className="container">
      <Routes>
          <Route exact path='/' element={<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      </Routes>
    </div>
    
    </BrowserRouter>

    <FooterComponent/>

    </div>
  );
}

export default App;
