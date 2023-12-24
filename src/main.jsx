import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-sansBalsmiq'>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)


