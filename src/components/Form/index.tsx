import { FormContainer, Input, Label, Legend, Select } from "./style";

export function Form() {
    return (
        <FormContainer action="#">
            <Legend>Preencha os dados para criar o card do colaborador.</Legend>

            <div>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" name="name" id="name" placeholder="Digite seu nome"/>
            </div>

            <div>
                <Label htmlFor="role">Cargo</Label>
                <Input type="text" name="role" id="role" placeholder="Digite seu cargo" />
            </div>

            <div>
                <Label htmlFor="image">Imagem</Label>
                <Input type="text" name="image" id="image" placeholder="Informe o endereço da imagem" />
            </div>

            <div>
                <Label htmlFor="team">Time</Label>
                <Select name="team" id="team"></Select>
            </div>
            
            <button type="submit">Criar Card</button>
        </FormContainer>
    )
}