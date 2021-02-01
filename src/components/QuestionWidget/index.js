import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';

import Widget from '../Widget';
import AlternativesForm from '../AlternativesForm';
import Button from '../Button';

function QuestionWidget({
  questionIndex,
  question,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasSelectedAlternative = selectedAlternative !== undefined;

  function handleAlternativeSubmit(event) {
    event.preventDefault();

    setIsFormSubmitted(true);

    setTimeout(() => {
      setSelectedAlternative(undefined);
      setIsFormSubmitted(false);
      addResult(isCorrect);
      onSubmit();
    }, 1000);
  }

  return (
    <Widget>
      <Widget.Header>
        <Link href="/">
          <FiArrowLeft size={18} color="inherit" />
        </Link>
        <h3>
          {`
            Pergunta
            ${questionIndex + 1}
            de
            ${totalQuestions}
          `}
        </h3>
      </Widget.Header>

      <img
        alt="..."
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>

        <p>{question.description}</p>

        <AlternativesForm onSubmit={handleAlternativeSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const questionId = `question__${questionIndex}`;
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isFormSubmitted && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasSelectedAlternative}>Confirmar</Button>

          {isFormSubmitted && isCorrect && <p>Acertou</p>}
          {isFormSubmitted && !isCorrect && <p>Errou</p>}
        </AlternativesForm>

      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    answer: PropTypes.number,
    alternatives: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
};

export default QuestionWidget;
