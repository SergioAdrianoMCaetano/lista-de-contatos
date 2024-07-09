import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

import * as enums from '../../util/enums/Tarefa'

type ContatosState = {
    id: any
    itens: Contato[]
    filtro: {
        termo: string
        criterio: 'prioridade' | 'status' | 'todas'
        valor?: enums.Prioridade | enums.Status
    }
}

const initialState: ContatosState = {
    itens: [],
    id: undefined,
    filtro: {
        termo: '',
        criterio: 'todas'
    } 
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionarContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const ultimoContato = state.itens[state.itens.length -1]
            const novoContato = {
                ...action.payload,
                id: ultimoContato ? ultimoContato.id + 1 : 1
            }
            state.itens.push(novoContato)
        },
        removerContato: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((contato: { id: number }) => contato.id !== action.payload)
        },
        editarContato: (state, action: PayloadAction<Contato>) => {
            const index = state.itens.findIndex((contato: { id: any }) => contato.id === action.payload.id)
            if (index >= 0){
                state.itens[index] = action.payload
            }
        },
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.filtro.termo = action.payload
        },
        alterarFiltro: (state, action: PayloadAction<ContatosState['filtro']>) => {
            state.filtro = action.payload
        },
        alterarStatus: (
                state,
                action: PayloadAction<{ id: number; finalizado: boolean }>
            ) => {
                const indexDaTarefa = state.itens.findIndex(
                (t) => t.id === action.payload.id
                )
        
                if (indexDaTarefa >= 0) {
                state.itens[indexDaTarefa].status = action.payload.finalizado
                    ? enums.Status.CONCLUIDO
                    : enums.Status.PENDENTE
                }
        }
    }
})

export const { alterarStatus, alterarTermo, alterarFiltro, adicionarContato, removerContato, editarContato } = contatosSlice.actions

export default contatosSlice.reducer