import styled from 'styled-components';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* <img src="https://logodownload.org/wp-content/uploads/2020/06/valorant-logo-2.png" width="250" /> */}
        <Widget>
          <Widget.Header>
            <h1>Valorant</h1>
          </Widget.Header>
          <Widget.Content>

            <p>Será que você vai brocar e acertar todas as perguntas? Prove que você é um verdadeiro radiante!</p>
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
  );
}
