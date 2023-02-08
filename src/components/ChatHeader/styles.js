import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 59px;
    min-width: 230px;
    background-color: white;
    padding: 10px 20px;
    align-items: center;
    box-shadow: 0 0px 1px #0003;
    z-index: 1;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    svg{
        width: 30px;
        height: 30px;
        background-color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }
`;

export const NameContent = styled.div`
    display: grid;
    
`;

export const Name = styled.span`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg{
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;