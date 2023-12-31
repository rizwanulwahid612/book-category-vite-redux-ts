import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
  <Provider store={store}>      {/*Provider from React Redux*/}
    <RouterProvider router={routes}/>  {/*RouterProvider from React router dom*/}
  </Provider>
  </React.StrictMode>,
)
