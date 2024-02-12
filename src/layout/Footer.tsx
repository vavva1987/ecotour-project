import { Container } from '@mui/material'
import '../components/Footer/FooterStyle.scss'
import FirstFooterComponent from 'components/Footer/FirstFooterComponent'

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
        </Container>
    )
}

export default Footer
