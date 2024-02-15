import { Container, Link } from '@mui/material'
import './FooterStyle.scss'

type Props = {}

const SecondFooterComponent = (props: Props) => {
    return (
        <Container
            className="second-footer-component"
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '0 30px',
                padding: '0',
                height: '240px',
            }}
        >
            <div>
                <h3>Useful links</h3>
                <div className="second-footer-component-item">
                    <Link>Blog</Link>
                    <Link>About Us</Link>
                    <Link>Education</Link>
                    <Link>Contact Us</Link>
                </div>
            </div>
            <div>
                <h3>Recent Posts</h3>
            </div>
        </Container>
    )
}

export default SecondFooterComponent
