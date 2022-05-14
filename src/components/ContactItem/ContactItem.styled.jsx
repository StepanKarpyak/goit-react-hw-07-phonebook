import styled from "styled-components";

export const Button = styled.button`
  margin-left: 15px;
  padding: 5px 10px;
  background-color: #d7d2d2;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ItemList = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
    
  }
  list-style: none;
  margin-left: -12px
`;