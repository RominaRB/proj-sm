import styled, { css } from 'styled-components';

const FaqList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:90%;
`;

const Pregunta = styled.div`
    display: flex;
    width:100px;
    height:100px;
    padding-left: 5px;
    padding-right: 5px;
    border:1px solid black;
`;

export default function Faqs () {
    return (
        <FaqList>
            <Pregunta>
                Preg 1
            </Pregunta>
            <Pregunta>
                Preg 2
            </Pregunta>            
        </FaqList>
    );
}