import { Button, ContainerInputs, FormContainer, Input, Label, Legend, Select } from "./style";

export function Form() {
    return (
        <FormContainer action="#">
            <Legend>Preencha os dados para criar o card do colaborador.</Legend>

            <ContainerInputs>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" name="name" id="name" placeholder="Digite seu nome"/>
            </ContainerInputs>

            <ContainerInputs>
                <Label htmlFor="role">Cargo</Label>
                <Input type="text" name="role" id="role" placeholder="Digite seu cargo" />
            </ContainerInputs>

            <ContainerInputs>
                <Label htmlFor="image">Imagem</Label>
                <Input type="text" name="image" id="image" placeholder="Informe o endereço da imagem" />
            </ContainerInputs>

            <ContainerInputs>
                <Label htmlFor="team">Time</Label>
                <Select name="team" id="team"></Select>
            </ContainerInputs>
            
            <Button type="submit">Criar Card</Button>
        </FormContainer>
    )
}