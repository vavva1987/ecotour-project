import { Grid } from '@mui/material'
import ResponsiveAppBar from '../components/appbar/AppBar'
import './Header.css'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <Grid className="header">
                <ResponsiveAppBar />
            </Grid>
        </>
    )
}

export default Header
