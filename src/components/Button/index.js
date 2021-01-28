import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: all .1s;

  svg {
    margin-left: 4px;
    transition: all .1s;
  }

  &:disabled {
    border-color: #dedede;
    background-color: #dedede;
    color: #777;
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover svg {
    transform: translate3d(4px, 0, 0);
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
