import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: blueviolet;
      color: white;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  if(background-color === blueviolet){
    color: white.
  }else{
    color: black
  }
  text-align: right;
  height: 15px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: -4px 6px 2px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;