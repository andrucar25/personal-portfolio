import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import {ThemeProviderCont} from '../context/themeContext'
import {LanguageProvider} from '../context/languageContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light' enableSystem={false}>
      <ThemeProviderCont>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </ThemeProviderCont>
    </ThemeProvider>
  )
}

export default MyApp
