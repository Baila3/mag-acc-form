import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LookUpForm from './Components/LookUpForm/LookUpForm';
import Header from './Components/Header/Header';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<RegisterForm />}/>
        <Route path="/DataLookUp"  element={<LookUpForm/>} />
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
