import styled from "styled-components";

export default function ForecastContainer({ title, listDirection = 'row', children }) {
  return (
    <Container listDirection={listDirection}>
      <h3>{title}</h3>
      <ul>
        {children}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  overflow: hidden;
  margin: 1rem 0;
  max-height: 60vh;
  h3{
    font-size: 2rem;
    margin: 0 0 2.6rem 0;
    padding: 1rem;
    border-bottom: 1px solid #e7e7e7;
    text-align: center;
  }
  ul {
    display: flex;
    overflow-x: ${props => props?.listDirection !== "column" ? 'scroll' : 'hidden'};
    overflow-y: ${props => props?.listDirection === 'column' ? 'scroll' : 'hidden'};
    flex-direction: ${props => props?.listDirection}
  }
  @media (max-width: 768px){
    padding: 0.25rem 0.5rem;
    h3{
      font-size: 2.4rem;
      text-align: left;
    }
  }
`;