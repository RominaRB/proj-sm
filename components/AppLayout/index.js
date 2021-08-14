import styled, { css } from 'styled-components';
import Header from '../Header'
import Footer from '../Footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:600px;
    background-color: gray;
    color: white;
    padding-left: 50px;
    padding-right: 50px;
    ${(props) =>
    props.mobile &&
    css`
        width: 90%;
    `}
`;
Container.displayName = 'Container';

export default function AppLayout ({children}) {
    return (
        <>
            <Header />
                <Container>
                    {children}
                </Container>
            <Footer />
        </>
    );
}