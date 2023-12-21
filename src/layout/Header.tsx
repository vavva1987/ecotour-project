import ResponsiveAppBar from './AppBar'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <ResponsiveAppBar />
        </>
    )
}

export default Header
