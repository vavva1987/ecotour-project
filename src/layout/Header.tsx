import HeaderBackground from 'components/HeaderBackground/HeaderBackground'
import ResponsiveAppBar from '../components/appbar/AppBar'
import './Header.scss'

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
