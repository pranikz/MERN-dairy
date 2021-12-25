import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './Screens/LandingPage/LandingPage';
import MyNotes from './Screens/MyNotes/MyNotes';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';


function App() {
  return (
    <div className='font-roboto'>
    <BrowserRouter>
   
    <Header />
      <main >
      
      <Routes> <Route path='/' element={<LandingPage/>} exact/></Routes>
      <Routes><Route path='/mynotes' element={<MyNotes/>}/></Routes>
     
      
      
      </main>
      <Footer />
    
    </BrowserRouter>
    </div>
  );
}

export default App;
