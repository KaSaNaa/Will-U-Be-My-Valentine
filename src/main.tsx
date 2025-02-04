import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './utils/theme.ts'
import './index.css'
import RoutesPage from './routes.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesPage />
    </ThemeProvider>  
  </StrictMode>,
)
