import HeaderBackground from 'components/HeaderBackground/HeaderBackground'
import ResponsiveAppBar from '../components/appbar/AppBar'
import './Header.css'
// import HeaderBackgroundTitle from 'components/HeaderBackground/HeaderBackgroundTitle'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <ResponsiveAppBar />
            <HeaderBackground />
        </>
    )
}

export default Header
