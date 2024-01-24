import HeaderBackgroundTitle from './HeaderBackgroundTitle'
import '../../layout/Header.scss'
import { Container } from '@mui/material'

type Props = {}

const HeaderBackground = (props: Props) => {
    return (
        <div className="header-background">
            <Container maxWidth="xl" className="header-background-img">
                <HeaderBackgroundTitle />
            </Container>
        </div>
    )
}

export default HeaderBackground
