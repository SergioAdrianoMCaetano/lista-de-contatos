import styled from 'styled-components'

export const Form = styled.form`
    max-width: 600px;
    width: 100%;
`

export const Campo = styled.input`
    display: block;
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`

export const Opcoes = styled.div`
    margin-bottom: 16px;

    p {
        margin-bottom: 6px;
    }

    label {
        margin-right: 6px;
    }
`

export const Opcao = styled.div`
    display: inline;
    text-transform: capitalize;
`