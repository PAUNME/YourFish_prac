import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wrongpage = () => {
    const navigate =useNavigate();
    const goHome = () => {
        navigate("/"); 
    };

    return (
        <div>
            <h1>여기에는 아무것도 없네요!</h1>

            <button onClick={goHome} type="button">홈으로 돌아가기</button>
        </div>
    );
};

export default Wrongpage;