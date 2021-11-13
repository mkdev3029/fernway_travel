import styled from 'styled-components';

export const SlideSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 414px;
  height: 247px;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
height: 247px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.0);
  }
`;
export const Pagination = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin: 2px;
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 15px 20px;
  background-color: orange;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 5px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.background ? "#1e1e1e" : "")};
`;

