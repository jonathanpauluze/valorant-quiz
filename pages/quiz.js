import Head from 'next/head';

import QuizBackground from '../src/components/QuizBackground';
import QuizQuestion from '../src/components/QuizQuestion';

import db from '../db.json';

const questions = db.questions;

export default function Quiz() {
  return (
    <>
      <Head>
        <title>Valorant Quiz</title>
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizQuestion>
          {questions.map(({id, image, title, description, alternatives, answer}) => (
            <QuizQuestion.Card key={id}>
              <QuizQuestion.Image src={image} />

              <QuizQuestion.Content>
                <QuizQuestion.Title>{title}</QuizQuestion.Title>

                <QuizQuestion.Description>{description}</QuizQuestion.Description>

                <QuizQuestion.Alternatives>
                  {alternatives.map((alternative, index) => (
                    <QuizQuestion.Alternative key={index}>
                      {alternative}
                    </QuizQuestion.Alternative>
                  ))}
                </QuizQuestion.Alternatives>
              </QuizQuestion.Content>
            </QuizQuestion.Card>
          ))}
        </QuizQuestion>
      </QuizBackground>
    </>
  );
}