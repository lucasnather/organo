import styled from "styled-components";

export const FormContainer = styled.form`

    width: 1121px;

    padding: 34px 84px;
    margin: 75px auto;

    border-radius: 10px;
    background-color: #F6F6F6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export const Legend = styled.legend`

    margin-bottom: 44px;

    font-size: 32px;
    font-family: 'Prata', sans-serif;
`

export const ContainerInputs = styled.div`

    margin-bottom: 29px;
`

export const Label = styled.label`

    font-weight: 600;
    font-size: 18px;

    display: block;
    margin-bottom: 8px;

`

export const Input = styled.input`

    width: 100%;

    padding: 20px 11px;

    border: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    &::placeholder {
        color: ${({theme}) => theme.text.gray};
    }

`

export const Select = styled.select`

    width: 100%;

    padding: 20px 11px;

    border: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    background-color: ${({theme}) => theme.primary.white};

`

export const Button = styled.button`
    
    font-size: 20px;
    font-weight: 700;

    padding: 29px 28px;
    border-radius: 10px;
    border: none;

    color: ${({theme}) => theme.primary.white};
    background-color: ${({theme}) => theme.primary.purple};

    &:hover {
        color: ${({theme}) => theme.primary.green};
    }
`