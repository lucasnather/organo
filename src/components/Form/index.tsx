import { z } from "zod";
import { Button, ContainerInputs, FormContainer, Input, Label, Legend, Select } from "./style";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formCardSchema = z.object({
    name: z.string().min(3, "Mínimno de 3 caracters"),
    role: z.string(),
    image: z.string().url("O formato precisa estar em URL"),
    team: z.string()
})

type FormCardType = z.infer<typeof formCardSchema>

export function Form() {
    const [collaborattor, setColarattor] = useState<FormCardType[]>([])

    const teams = ["Programação", "Front-End", "Data Science", "DevOps", "Back-End", "Ux e Design", "Mobile", "Inovação e Gestão"]

    const { register, reset, handleSubmit } = useForm<FormCardType>({
        resolver: zodResolver(formCardSchema)
    })

    function handleSubmitForm(data: FormCardType) {
        setColarattor((prevState) => [...prevState, data])
        reset()
    }

    return (
        <FormContainer action="#" onSubmit={handleSubmit(handleSubmitForm)}>
            <Legend>Preencha os dados para criar o card do colaborador.</Legend>

            <ContainerInputs>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" {...register('name')} placeholder="Digite seu nome"/>
            </ContainerInputs>

            <ContainerInputs>
                <Label htmlFor="role">Cargo</Label>
                <Input type="text" {...register('role')} placeholder="Digite seu cargo" />
            </ContainerInputs>

            <ContainerInputs>
                <Label htmlFor="image">Imagem</Label>
                <Input type="text" {...register('image')} placeholder="Informe o endereço da imagem" />
            </ContainerInputs>

            <ContainerInputs>
                <Label htmlFor="team">Time</Label>
                <Select {...register('team')}>
                    {
                        teams.map(team => {
                            return <option value={team} key={team}>{team}</option>
                        })
                    }
                </Select>
            </ContainerInputs>
            
            <Button type="submit">Criar Card</Button>
        </FormContainer>
    )
}