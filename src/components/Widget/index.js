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

Widget.Link = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  padding: 0;
  border: 0;
  background-color: transparent;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    svg {
      margin-left: 5px;
      transition: all .1s;
    }

    &:hover {
      text-decoration: underline;

      svg {
        transform: translate3d(5px, 0, 0);
      }
    }
  }
`;

export default Widget;
