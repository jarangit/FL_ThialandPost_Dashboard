import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/layout'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      light: '#ef9a9a',
      main: '#D30D2B',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
