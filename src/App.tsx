import styled from "styled-components";

const RedText = styled.div`
  margin-top: 20px;
  color: red;
`;

const App = () => {
  return <>
    <div>This is a react app!</div>
    <RedText>This text is red to show that styling works.</RedText>
  </>;
}

export default App;
