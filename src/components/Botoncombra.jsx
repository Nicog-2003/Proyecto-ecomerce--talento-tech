import styled from "styled-components";

const BotonCompra = styled.button`
  background-color:rgb(90, 90, 90);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color:rgb(139, 1, 1);
  }
`;

function Producto({text}) {
  return <BotonCompra>{text}</BotonCompra>;
}

export default Producto