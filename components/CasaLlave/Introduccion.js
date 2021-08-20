import styled, { css } from 'styled-components';

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:90%;
`;

export default function Introduccion () {
    return (
        <IntroContainer>
            <p>Peque&ntilde;a intro al sector de casa llave en mano</p>
        </IntroContainer>
    );
}