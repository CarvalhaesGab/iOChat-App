import styled from "styled-components";

export const Container = styled.div`
  
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #f0f2f5;
  display: flex;

  svg {
    width: 25px;
    height: 25px;
    color: blueviolet;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 13px;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
`;