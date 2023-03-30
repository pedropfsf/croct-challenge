import { Container } from "./styles";

type ContainerPageProps = {
  children: JSX.Element | JSX.Element[];
}

export default function ContainerPage({ children }: ContainerPageProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}