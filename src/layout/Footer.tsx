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
            sx={{ bgcolor: '#252424', color: '#ffffff', height: '470px' }}
        >
            <Container
                sx={{
                    height: '370px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <FirstFooterComponent />
                <SecondFooterComponent />
                <ThirdFooterComponent />
            </Container>
            <Container sx={{ borderTop: '1px solid #8ac92a', height: '100px' }}>
                <div className="footer-bottom">
                    © <span>ekotur</span> 2023. All rights reserved
                </div>
            </Container>
        </Container>
    )
}

export default Footer
