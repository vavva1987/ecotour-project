import { Button, Container } from '@mui/material'
import '../../layout/Header.css'
import BrandLogo from 'components/BrandLogo/BrandLogo'

type Props = {}

const HeaderBackgroundTitle = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            className="header-background-title"
            sx={{
                display: 'block',
                textAlign: 'center',
                width: '488px',
                height: '331px',
                color: '#ffffff',
                zIndex: 100,
            }}
        >
            <div>
                <h1>Blog</h1>
                <BrandLogo />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <Button
                    className="header-btn"
                    sx={{
                        width: '143px',
                        height: '44px',
                        backgroundColor: '#8AC92A',
                        color: '#FFFFFF',
                        ':hover': {
                            color: 'black',
                            backgroundColor: '#ffffff',
                            border: '1px',
                            solid: 'black',
                        },
                    }}
                >
                    learn more
                </Button>
            </div>
        </Container>
    )
}

export default HeaderBackgroundTitle
