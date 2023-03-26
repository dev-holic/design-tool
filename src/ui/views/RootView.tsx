import { AsideView } from '../aside/views/AsideView';
import { HeaderView } from '../header/views/HeaderView';
import { CanvasContainerView } from '../main/canvas/views/CanvasContainerView';
import { DesignItemPropsView } from '../main/design-item-props/views/DesignItemPropsView';
import { FooterView } from '../main/footer/views/FooterView';
import styled from 'styled-components';

export function RootView() {
  return (
    <Container>
      <HeaderView />
      <Body>
        <AsideView />
        <Main>
          <DesignItemPropsView />
          <StyledCanvasContainerView />
          <FooterView />
        </Main>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
`;

const Main = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledCanvasContainerView = styled(CanvasContainerView)`
  flex: 1;
`;
