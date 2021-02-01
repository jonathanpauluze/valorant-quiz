import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: #1C1814;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, .5);
  overflow: hidden;

  h1, h2, h3 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  h3 {
    margin: 0 0 0 10px;
  }

  svg {
    cursor: pointer;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

Widget.Topic = styled.a`
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  outline: 0;
  transition: .3s;
  cursor: pointer;

  + label {
    margin-top: 8px;
  }
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
