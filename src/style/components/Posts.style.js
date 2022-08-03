import styled from 'styled-components';


export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.borderColor};
  transition: all ease-in-out .5s;

  &:first-child {
    border-top: 5px solid;
    border-color: ${(props) => props.borderColor};
  }
`

export const List = styled.li`
  list-style: none;
  cursor: pointer;
`

export const Title = styled.h3`
  font-size: 18px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;

  &:hover {
    color: ${(props) => props.accentColor};
    font-weight: bold;
  }
`

export const UserId = styled.div`
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`