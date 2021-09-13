import styled, { css } from 'styled-components';
import AppLayout from "../../../components/AppLayout"

const ContainerModelo = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Modelo() {
  return (
    <AppLayout>
      <ContainerModelo>
        Detalle del Modelo/Item: Xyyyyyyy
      </ContainerModelo>
    </AppLayout>
  )
}
