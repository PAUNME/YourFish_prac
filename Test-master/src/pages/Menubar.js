import React, {useState} from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/MainLogo.png";


function Menubar()  {

    const navigate =useNavigate();
    const goHome = () => {
        navigate("/"); 
    };

    const [clicked, setClicked] = useState(false);


    return ( 
     <>
        <NavContainer>
                <LogoImg src={logo} onClick={goHome}/>             
                <Menu>
                    <MenuItem>
                        <li><Link to="/question" style={ {textDecoration: 'none'}}> 질문게시판 </Link> </li>
                        <li><Link to="/store" style={ {textDecoration: 'none'}}> 스토어 </Link></li>
                    </MenuItem>
                    <UserItem>
                        <Link to="./login">
                            <button class="login">로그인</button>
                        </Link>
                        <Link to="./register">
                            <button class="join">회원 가입</button>
                        </Link>
                    </UserItem>
                </Menu>
        </NavContainer>
    <Outlet />

    </>
    );
}

const Menu = styled.div`
    display : flex;
    float : right;
`

const LogoImg = styled.img`
    float : left;
    margin : 28.095px;
`

const NavContainer = styled.nav`
    width:100%;
    background-color : gray;
    height:102px;
    font-family: 'Noto Sans KR', sans-serif;
    
    //display : flex;
`
const MenuItem = styled.div`
    list-style : none;
    display : flex;
    font-size: 21px;
    margin :35px 17.5px;

    li{
        margin: 0 20px 0;
        color : black;
    }

`
const UserItem = styled.div`
    display : flex;
    text-decoration: none;
    padding : 30px 20px;
    button {
        margin: 0 17.5px 0;
        border-radius: 8px;
        height : 42px;
        width : 111px; 
    }
`

export default Menubar;