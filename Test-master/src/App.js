import React from 'react';
import {Outlet, Routes, Route} from "react-router-dom";
import Menubar from './pages/Menubar';
import Store from './pages/Store';
import Question from './pages/Question';
import Register from './pages/Register';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Wrongpage from './pages/Wrongpage';
import Homepage from './pages/Homepage';

const App = () => {
  return <Routes>
    {/* 여기서 Menubar는 홈페이지(유저피드) 및 다른 경로로 이동가능 */}
    <Route path="/" element={<Menubar/>}>
    <Route path="/register" element={<Register/>}></Route> 
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/mypage" element={<Mypage/>}></Route>  

    <Route path="/" element={<Homepage/>}></Route>

    <Route path="/store" element={<Store/>}></Route>
    <Route path="/question" element={<Question/>}></Route> 
    </Route>

    <Route path ="*" element={<Wrongpage/>}/>
  </Routes>
};

export default App;