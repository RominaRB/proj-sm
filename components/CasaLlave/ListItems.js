import Link from 'next/link'
import styled, { css } from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 10px;
`;

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:90%;
    margin: 10px;
`;

const Item = styled.div`
    display: flex;
    width:200px;
    height:200px;
    padding-left: 5px;
    padding-right: 5px;
    border:1px solid black;
    margin: 5px;
`;

export default function ListItems () {
    return (
        <MainContainer>
            <ListContainer>
                <Link href="/llaveenmano/modelo">
                    <a>
                        <Item>
                            Nuestros mod 1
                        </Item>
                    </a>                
                </Link>
                <Link href="/llaveenmano/modelo">
                    <a>
                        <Item>
                            Nuestros mod 2
                        </Item>
                    </a>                
                </Link>
            </ListContainer>
            <ListContainer>
                <Link href="/llaveenmano/modelo">
                    <a>
                        <Item>
                            Personalizados 1
                        </Item>
                    </a>                
                </Link>
                <Link href="/llaveenmano/modelo">
                    <a>
                        <Item>
                            Personalizados 2
                        </Item>
                    </a>                
                </Link>                
            </ListContainer>        
        </MainContainer>
    );
}