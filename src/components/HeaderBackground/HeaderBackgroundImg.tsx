import { Container } from '@mui/material'
import backgroundImg from '../../assets/background-img.jpg'

type Props = {}

const HeaderBackgroundImg = (props: Props) => {
    return (
        <Container className="header-background-img" maxWidth="lg">
            <img src={backgroundImg} alt="" />
        </Container>
    )
}

export default HeaderBackgroundImg
