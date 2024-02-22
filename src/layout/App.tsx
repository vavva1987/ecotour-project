import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Blog from 'Pages/Blog/Blog'
import About from 'Pages/About/About'
import Contact from 'Pages/Contact/Contact'
import Home from 'Pages/Home/Home'
import ResponsiveAppBar from 'components/appbar/AppBar'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
