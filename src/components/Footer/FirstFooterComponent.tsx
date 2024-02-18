import { Container, Link } from '@mui/material'
import './FooterStyle.scss'
import FooterLogo from './FooterLogo'

type Props = {}

const FirstFooterComponent = (props: Props) => {
    return (
        <Container
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '240px',
                padding: '0',
            }}
        >
            <div className="footer-logo-title">
                <FooterLogo />
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <Container
                className="footer-item"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Link>Privacy & Policy</Link>
                <Link>Terms & Conditions</Link>
                <Link>FAQ</Link>
            </Container>
        </Container>
    )
}

export default FirstFooterComponent
