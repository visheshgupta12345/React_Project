import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prelogin from './Pages/PreLogin';
import WelcomePage from './Pages/WelcomePage';
import dashboard from './Pages/dashboard';
import EmployeeList from './Pages/EmployeeList';
import EmpList from './Pages/EmpList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Prelogin}/>
        <Route path='/Prelogin' Component={Prelogin}/>
        <Route path='/WelcomePage' Component={WelcomePage}/>
        <Route path='/dashboard' Component={dashboard}/>
        <Route path='/EmployeeList' Component={EmployeeList}/>
        <Route path='/EmpList' Component={EmpList}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
