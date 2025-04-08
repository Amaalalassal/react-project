
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropertiesGridPage from "./components/pages/PropertiesGridPage.jsx";


const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#1cb3ff', 
        },
      },
    },
  },
});

function App() {

  return (
  <>
   <ThemeProvider theme={theme}>
    
    <PropertiesGridPage />;
    </ThemeProvider>
  </>
     
  )
}

export default App
