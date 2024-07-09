import styled from 'styled-components'

type CardProps = {
    ativo: boolean
}

export const Card = styled.div<CardProps>`
    padding: 8px;
    border: 2px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
    background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
    color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
    border-radius: 8px;
    cursor: pointer;
`

export const Contador = styled.span`
    font-weight: bold;
    font-size: 24px;
    display: block;
`

export const Label = styled.span`
    font-size: 14px;
`
