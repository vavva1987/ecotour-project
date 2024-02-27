import { Container } from '@mui/material'
import '../About.scss'

type Props = {}

const AboutUsTitle = (props: Props) => {
    return (
        <Container
            className="about-us-title"
            sx={{
                height: 550,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container className="about-us-title-img">
                <img src="/images/men-children.png" alt="" />
            </Container>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h1>
                    Headline <span>about us</span>
                </h1>
                <div className="about-us-title-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatu
                    </p>
                </div>
            </Container>
        </Container>
    )
}

export default AboutUsTitle
