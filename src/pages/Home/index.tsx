import { Container } from '../../assets/components/Container';
import { CountDown } from '../../assets/components/CountDown';
import { MainForm } from '../../assets/components/MainForm';
import { MainTemplate } from '../../assets/templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
