import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  gap: 15px;
  width: 245px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(248, 248, 248);

  &:hover {
    background-color: #f0f2f5;
  }

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  &.active {
    background-color: rgb(175, 99, 247);
    border-radius: 5px;
    color: white;
  }
`;

const Name = styled.span`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:600;
  margin-bottom: 4px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;

export { Name, Avatar, Container }