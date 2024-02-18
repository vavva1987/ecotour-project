import { Container, Link } from '@mui/material'
import './FooterStyle.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
type Props = {}

const ThirdFooterComponent = (props: Props) => {
    return (
        <Container maxWidth="sm">
            <Container
                maxWidth="xs"
                className="third-footer-component"
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                <h3 className="third-footer-component-title">Social</h3>

                <Container maxWidth="sm" sx={{ display: 'flex' }}>
                    <Link
                        className="social"
                        sx={{
                            marginLeft: '-25px',
                            marginRight: '10px',
                            padding: '0',
                        }}
                    >
                        <FacebookIcon
                            sx={{
                                color: '#ffffff',
                                width: '30px',
                                height: '30px',
                                ':hover': {
                                    color: '#8ac92a',
                                },
                            }}
                        />
                    </Link>

                    <Link
                        sx={{
                            marginRight: '10px',
                        }}
                    >
                        <InstagramIcon
                            sx={{
                                color: '#ffffff',
                                width: '30px',
                                height: '30px',
                                ':hover': {
                                    color: '#8ac92a',
                                },
                            }}
                        />
                    </Link>

                    <Link
                        sx={{
                            marginRight: '10px',
                        }}
                    >
                        <TwitterIcon
                            sx={{
                                color: '#ffffff',
                                width: '30px',
                                height: '30px',
                                ':hover': {
                                    color: '#8ac92a',
                                },
                            }}
                        />
                    </Link>

                    <Link
                        sx={{
                            margin: '0',
                            padding: '0',
                            width: '30px',
                            height: '30px',
                        }}
                    >
                        <YouTubeIcon
                            sx={{
                                color: '#ffffff',
                                width: '30px',
                                height: '30px',
                                ':hover': {
                                    color: '#8ac92a',
                                },
                            }}
                        />
                    </Link>
                </Container>
            </Container>
        </Container>
    )
}

export default ThirdFooterComponent
