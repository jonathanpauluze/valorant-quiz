import PropTypes from 'prop-types';

import Widget from '../Widget';
import Form from '../Form';
import Button from '../Button';

function QuestionWidget({
  questionIndex,
  question,
  totalQuestions,
  onSubmit,
}) {
  function handleAlternativeSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <Widget>
      <Widget.Header>
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

        <Form onSubmit={handleAlternativeSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const questionId = `question__${questionIndex}`;
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit">Confirmar</Button>
        </Form>

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
};

export default QuestionWidget;
