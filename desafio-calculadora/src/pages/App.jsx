import { Container, Content, Row, Column } from "../styles";
import Input from "../components/Input";
import Button from "../components/Button";

export default function App() {
    return (
        <div>
            <Container>
                <Content>
                    <Input />
                    <Row>
                        <Button />
                        <Button />
                        <Button />
                        <Button />
                    </Row>
                    <Column></Column>
                </Content>
            </Container>
        </div>
    );
}
