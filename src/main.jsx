import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import theme from './utils/theme.js'
import Home from './routes/Home.jsx'
import Admin from './routes/Admin.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/camping-fonte',
    element: <App />,
    children: [
      { path: '/camping-fonte', element: <Home /> },
      { path: '/camping-fonte/admin', element: <Admin /> },
      { path: '/camping-fonte/login', element: <Login /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
)
