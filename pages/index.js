import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Title from '../src/components/Title';
import Text from '../src/components/Text';
import Form from '../src/components/Form';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <Head>
        <title>Valorant Quiz</title>
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <Title>Valorant</Title>
            </Widget.Header>

            <Widget.Content>
              <Text>
                Será que você vai brocar e acertar todas as perguntas?
                Prove que você é um verdadeiro radiante!
              </Text>

              <Form onSubmit={handleSubmit}>
                <Input
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Manda teu usuário aí"
                />

                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                  {' '}
                  <FiChevronRight size={18} color="inherit" />
                </Button>
              </Form>
            </Widget.Content>
          </Widget>

          {/* <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </Widget.Content>
          </Widget> */}

          <Footer />
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/jonathanpauluze/valorant-quiz" />
      </QuizBackground>
    </>
  );
}
