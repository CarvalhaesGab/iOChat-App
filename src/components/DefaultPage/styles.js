import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 935px;
  min-width: 268px;
  background-color: white;
  margin-left: 380px;
  margin-top: 15px;
  border-right: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  border-top: 1px solid #f3f3f3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  svg {
    width: 100px;
    height: 100px;
    color: blueviolet;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
`;