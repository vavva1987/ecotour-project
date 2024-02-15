import { Container } from '@mui/material'
import '../components/Footer/FooterStyle.scss'
import FirstFooterComponent from 'components/Footer/FirstFooterComponent'
import SecondFooterComponent from 'components/Footer/SecondFooterComponent'
import ThirdFooterComponent from 'components/Footer/ThirdFooterComponent'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                bgcolor: '#252424',
                color: '#ffffff',
                height: '470px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <FirstFooterComponent />
            <SecondFooterComponent />
            <ThirdFooterComponent />
        </Container>
    )
}

export default Footer
