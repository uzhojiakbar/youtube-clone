import styled from "styled-components";

const NavbarStyle = styled.div`
    display: flex;
    max-height: 80px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: var(--left-right-padding);
    background-color: var(--main-color);
    position: fixed;
    top: 0;
    border: 1px solid white;
    .left{
        display: flex;
        align-items: center;
    }
    .center{
        display: flex;
        align-items: center;
    }
    .right{
        display: flex;
        align-items: center;
    }
`

const Burger = styled.img``
const Logo = styled.img``
const Input = styled.input`
`
const Icon = styled.img`
`
const MyIcon = styled.img`
    width:  40px;
    height: 40px;
`

export { NavbarStyle, MyIcon, Icon, Burger, Logo, Input }