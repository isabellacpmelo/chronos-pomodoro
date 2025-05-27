import { Container } from '../../assets/components/Container';
import { MainTemplate } from '../../assets/templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          obcaecati molestiae voluptates, porro officiis quasi animi est
          consectetur tempora recusandae. Ipsa vero magni tempore dolore
          ratione, ut mollitia est quis?
        </p>
      </Container>
    </MainTemplate>
  );
}
