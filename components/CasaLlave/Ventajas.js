import styled, { css } from 'styled-components';

const VentajaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:90%;
`;

const Item = styled.div`
    display: flex;
    width:100px;
    height:100px;
    padding-left: 5px;
    padding-right: 5px;
    border:1px solid black;
`;

export default function Ventajas () {
    return (
        <VentajaContainer>
            <Item>
                Ventaja 1
            </Item>
            <Item>
                Ventaja 2
            </Item>            
        </VentajaContainer>
    );
}