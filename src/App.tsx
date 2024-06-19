import { ThemeProvider } from "styled-components"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { GlobalStyle } from "./global-style"
import { defaulTheme } from "./themes/default-theme"

function App() {


  return (
    <ThemeProvider theme={defaulTheme}>
      <Header />
      <Form />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
