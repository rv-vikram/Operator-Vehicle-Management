import styled from "styled-components";

export const Navbar = () => {

    return <Nav>
        <div>
            <div>Home</div>
            <div><img src="logo.png" alt="logo" /></div>
            <div>Login</div>
        </div>
    </Nav>
}

const Nav = styled.nav`
    position:fixed;
    width:100%;
    height: 70px;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    box-shadow: 1px 1px 10px gray;
    &>div{
    width:100%;

        padding:0px 30px;
    color:white;
        height:60px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    }
    &>div img{
        width:80%;
    }
    &>div>div{
        padding:8px;
        border:1px solid black;

    }
    &>div>div:nth-child(2){
        border:none !important;
    }
    &>div>div:hover{
        border:1px solid white;
        cursor: pointer;
    }
`;