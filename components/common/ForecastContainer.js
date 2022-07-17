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
`;