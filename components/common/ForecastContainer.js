import styled from "styled-components";

export default function ForecastContainer({ title, children }) {
  return (
    <Container>
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
  h3{
    font-size: 2rem;
    margin: 0 0 2.6rem 0;
    padding: 1rem;
    border-bottom: 1px solid #e7e7e7;
  }
  ul {
    display: flex;
    overflow: hidden;
  }
  @media (max-width: 768px){
    padding: 0.25rem 0.5rem;
  }
`;