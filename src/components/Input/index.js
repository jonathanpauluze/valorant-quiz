import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  margin-bottom: 25px;
  padding: 7px 15px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: transparent;
`;

export default Input;
