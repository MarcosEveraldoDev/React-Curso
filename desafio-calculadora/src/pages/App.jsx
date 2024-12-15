import { Container, Content, Row } from "../styles";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

export default function App() {
    const [currentNumber, setCurrentNumber] = useState("0");

    const handleClearInput = () => {
        //Limpa o Input
        setCurrentNumber("0");
    };

    // Função para validar operadores consecutivos
    const isOperatorValid = (input) => {
        // Não permite que o primeiro caractere seja um operador
        if (currentNumber === "" && /[+\-*/]/.test(input)) {
            return false;
        }

        // Não permite operadores consecutivos
        if (/[+\-*/]/.test(currentNumber.slice(-1)) && /[+\-*/]/.test(input)) {
            return false;
        }

        return true;
    };

    // Função para adicionar números ou operadores à expressão

    // Função para adicionar números ou operadores à expressão
    const handleAddNumber = (input) => {
        if (input === "=") {
            // Se for igual, calcular o resultado
            try {
                // Verifica se a expressão está vazia ou se contém operadores invalidos
                if (
                    currentNumber === "" ||
                    /[^\d+\-*/().]/.test(currentNumber)
                ) {
                    setCurrentNumber("Error");
                    return;
                }

                // Usa eval para calcular a expressão
                const result = eval(currentNumber);

                // Se o resultado for inválido, mostra "Error"
                if (isNaN(result)) {
                    setCurrentNumber("Error");
                } else {
                    setCurrentNumber(result.toString());
                }
            } catch (error) {
                console.log("🚀 ~ handleAddNumber ~ error:", error);
            }
        } else {
            // Verifica se o operador é válido antes de adicionar
            if (isOperatorValid(input)) {
                setCurrentNumber((prev) =>
                    prev === "0" ? input : prev + input
                );
            }
        }
    };
    return (
        <div>
            <Container>
                <Content>
                    <Input value={currentNumber} />
                    <Row>
                        <Button
                            label="C"
                            onClick={() => handleClearInput("C")}
                        />
                        <Button
                            label="*"
                            onClick={() => handleAddNumber("*")}
                        />
                        <Button
                            label="/"
                            onClick={() => handleAddNumber("/")}
                        />
                        <Button
                            label="**"
                            onClick={() => handleAddNumber("**")}
                        />
                    </Row>
                    <Row>
                        <Button
                            label="7"
                            onClick={() => handleAddNumber("7")}
                        />
                        <Button
                            label="8"
                            onClick={() => handleAddNumber("8")}
                        />
                        <Button
                            label="9"
                            onClick={() => handleAddNumber("9")}
                        />
                        <Button
                            label="-"
                            onClick={() => handleAddNumber("-")}
                        />
                    </Row>
                    <Row>
                        <Button
                            label="4"
                            onClick={() => handleAddNumber("4")}
                        />
                        <Button
                            label="5"
                            onClick={() => handleAddNumber("5")}
                        />
                        <Button
                            label="6"
                            onClick={() => handleAddNumber("6")}
                        />
                        <Button
                            label="+"
                            onClick={() => handleAddNumber("+")}
                        />
                    </Row>
                    <Row>
                        <Button
                            label="1"
                            onClick={() => handleAddNumber("1")}
                        />
                        <Button
                            label="2"
                            onClick={() => handleAddNumber("2")}
                        />
                        <Button
                            label="3"
                            onClick={() => handleAddNumber("3")}
                        />
                        <Button
                            label="."
                            onClick={() => handleAddNumber(".")}
                        />
                    </Row>
                    <Row>
                        <Button
                            label="0"
                            onClick={() => handleAddNumber("0")}
                        />
                        <Button
                            label="="
                            onClick={() => handleAddNumber("=")}
                        />
                    </Row>
                </Content>
            </Container>
        </div>
    );
}
