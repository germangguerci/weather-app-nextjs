import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </PageContainer>
  );
};

export default Layout;

const PageContainer = styled.div`
  background-color: var(--mainBg);
  height:100%;
  width:100%;
  position:relative;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  min-height: 100vh;
`;