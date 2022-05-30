import React from "react"
import { Container, FormStyle } from "./form.style"
import { useForm } from "react-hook-form";
import { H1, H2 } from "../../styles/globalutils/headers";


interface FromProps {
    children: JSX.Element[];
    onSubmit: ()=> void;
}

const Form: React.FunctionComponent<FromProps> = ({ children, onSubmit }) => {
    return (
        <Container>
            <H2> Buscar por filmes</H2>
            <FormStyle onSubmit={onSubmit}>
                <React.Fragment>
                    {children}
                </React.Fragment>
            </FormStyle>
        </Container>)
}

export default Form
 
  