import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import theme from './utils/theme.js'
import Home from './routes/Home.jsx'
import Admin from './routes/admin/Admin.jsx'
import Login from './routes/Login.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/camping',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/camping', element: <Home /> },
      { path: '/camping/admin', element: <Admin /> },
      { path: '/camping/login', element: <Login /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
)
