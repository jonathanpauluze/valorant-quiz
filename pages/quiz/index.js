import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import QuizPage from '../../src/screens/quiz';

export default function QuizScreen({ db }) {
  if (db) {
    return (
      <ThemeProvider theme={db.theme}>
        <QuizPage db={db} />
      </ThemeProvider>
    );
  }

  return (
    <QuizPage db={db} />
  );
}

export async function getServerSideProps(context) {
  const { external } = context.query;

  if (!external) {
    return {
      props: {},
    };
  }

  const db = await fetch(`${external}/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Falha ao buscar dados.');
    })
    .then((db) => db)
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      db,
    },
  };
}

QuizScreen.defaultTypes = {
  db: undefined,
};

QuizScreen.propTypes = {
  db: PropTypes.object,
};
