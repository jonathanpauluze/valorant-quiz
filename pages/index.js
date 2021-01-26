import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
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
  return (
    <>
      <Head>
        <title>Valorant Quiz</title>
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Valorant</h1>
            </Widget.Header>
            <Widget.Content>

              <p>Será que você vai brocar e acertar todas as perguntas? Prove que você é um verdadeiro radiante!</p>
              <Widget.Link>
                <Link href="/quiz">
                  <a>
                    Desafiar
                    <FiChevronRight size={18} color="#fff" />
                  </a>
                </Link>  
              </Widget.Link>
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
