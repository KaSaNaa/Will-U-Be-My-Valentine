import styled from 'styled-components';

const Button = styled.button<{ large?: boolean }>`
  background-color: #ff69b4;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  width: ${({ large }) => (large ? '100vw' : 'auto')};
  height: ${({ large }) => (large ? '100vh' : 'auto')};
  font-size: ${({ large }) => (large ? '32px' : '16px')};
`;

export default Button;