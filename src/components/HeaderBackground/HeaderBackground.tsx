import HeaderBackgroundTitle from './HeaderBackgroundTitle'
import '../../layout/Header.scss'
import { Container } from '@mui/material'

type Props = {}

const HeaderBackground = (props: Props) => {
    return (
        <Container maxWidth="xl" className="header-background">
            <Container className="header-background-img">
                <HeaderBackgroundTitle />
            </Container>
        </Container>
    )
}

export default HeaderBackground
