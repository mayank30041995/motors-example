import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Step from './Step'

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>
}
const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <App />,
    // loader: <div>Loading...</div>,
    children: [
      {
        path: 'team',
        element: <App />,
      },
    ],
  },
  {
    path: '/step',
    element: <Step />,
    // loader: <div>Loading...</div>,
    children: [
      {
        path: 'team',
        element: <div>Frontend</div>,
        // loader: <div>Loading...</div>,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
