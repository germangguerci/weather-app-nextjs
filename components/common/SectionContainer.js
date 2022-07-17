import styled from 'styled-components';

const MainContainer = styled.div`
  width:100%;
  height:100%;
  padding-top:${props => props.isFirstSection ? "134px" : "0px"};
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.bgColor && `background:${props.bgColor}`};
  ${props => props.isFooter && `border-top:24px solid var(--primaryColor1);`};
`;

const InnerContainer = styled.div`
  max-width:1200px;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  @media (max-width: 1200px){
    padding: 0 14px;
  }
`;

const SectionContainer = ({ children, isFullWidth = false, isFirstSection = false, bgColor, isFooter = false }) => {
  return (
    <MainContainer isFirstSection={isFirstSection} bgColor={bgColor} isFooter={isFooter}>
      {isFullWidth ?
        children
        :
        <InnerContainer>
          {children}
        </InnerContainer>
      }
    </MainContainer>
  );
};

export default SectionContainer;
