import React from 'react'

import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'

import store from './store'

import Home from './pages/Home'

import CadastroContato from './pages/CadastroContato'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <CadastroContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas}/>
      </Container>
    </Provider>
  )
}

export default App;
