import styled, { css } from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (min-width: 300px) { 
      max-width: 200px;
    }
`;

const Contacto = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    border: 1px solid blue;
    flex-direction: column;
    @media (min-width: 300px) { 
      max-width: 200px;
    }
`;

const MainFooter = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 300px) { 
      max-width: 200px;
    }
`;

export default function Footer() {
    return (
      <MainContainer>
        <Contacto id="contacto">
          Contacto, mapa
        </Contacto>
        <MainFooter>
          Sector del footer
        </MainFooter>
      </MainContainer>  
    );
}