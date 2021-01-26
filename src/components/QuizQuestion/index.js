import styled from 'styled-components';

const QuizQuestion = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

QuizQuestion.Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, .5);

  + div {
    margin-top: 20px;
  }
`;

QuizQuestion.Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
`;

QuizQuestion.Content = styled.div`
  width: 100%;
  padding: 10px;
`;

QuizQuestion.Title = styled.strong`
  
`;

QuizQuestion.Description = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  color: #ccc;
`;

QuizQuestion.Alternatives = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  margin-top: 20px;

  button {
    width: 100%;
  }
`;

QuizQuestion.Alternative = styled.button`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  font-size: 14px;
  text-align: left;
  color: ${({ theme }) => theme.colors.contrastText};
  /* background-color: ${({ theme }) => theme.colors.secondary}; */
  background-color: #b78460;
  cursor: pointer;
`;

export default QuizQuestion;
