import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`
  width: 100%;
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

export default function Input({ onChange, placeholder, ...rest }) {
  return (
    <fieldset>
      <InputField
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </fieldset>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
