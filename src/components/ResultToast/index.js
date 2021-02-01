import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ResultToast = styled.p`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  padding: 0 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme, isCorrect }) => isCorrect ? theme.colors.success : theme.colors.wrong};
`;

function ResultToastAnimation({ as, isCorrect, children }) {
  return (
    <ResultToast
      as={as}
      isCorrect={isCorrect}
      transition={{
        duration: 0.2,
        delay: 0,
      }}
      variants={{
        show: { y: 0 },
        hidden: { y: 50 },
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </ResultToast>
  );
}

ResultToastAnimation.defaultProps = {
  as: motion.div,
};

ResultToastAnimation.propTypes = {
  as: PropTypes.node,
  isCorrect: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultToastAnimation;
