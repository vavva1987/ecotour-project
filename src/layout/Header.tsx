import HeaderBackground from 'components/HeaderBackground/HeaderBackground'
import './Header.scss'
import { Container } from '@mui/material'

type Props = {}

const Header = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <HeaderBackground />
        </Container>
    )
}

export default Header
