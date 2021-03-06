import Head from 'next/head'
import styled, { css } from 'styled-components';
import Link from 'next/link'

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 1px solid crimson;
    ${(props) =>
    props.mobile &&
    css`
        width: 100px;
    `}
`;

const NavItem = styled.div`
    color: black;
    margin: 10px;
`;

const Contacto = styled.div`
    display: flex;
    cursor: pointer;
    color: black;
    margin: 10px;
`;

const onContactClicked = () => {
    window.scrollTo({ top: 9999, behavior: 'smooth' });
};

export default function Header() {
    return (
      <>
        <Head>
            <title>San Marcos - Construcciones</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo-fav.ico" />
        </Head>
        <Nav>
            <NavItem>
                <Link href="/">
                    <a>HOME</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/nosotros">
                    <a>NOSOTROS</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/empresas">
                    <a>EMPRESAS</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/llaveenmano">
                    <a>CASA LLAVE EN MANO</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/obras">
                    <a>OBRAS</a>
                </Link>
            </NavItem>            
            <NavItem>
                <Contacto onClick={onContactClicked}>
                    CONTACTO
                </Contacto>
            </NavItem>
        </Nav>
      </>  
    );
}