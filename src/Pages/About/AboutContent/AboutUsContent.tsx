import { Container, Paper } from '@mui/material'
import '../About.scss'
import CarouselFrame from 'components/CarouselFrame/CarouselFrame'
import SectionTitle from 'components/SectionTitle/SectionTitle'

type Props = {}

const AboutUsContent = (props: Props) => {
    return (
        <Container>
            <Container
                className="about-us-content"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '10px',
                    marginBottom: '70px',
                }}
            >
                <Paper elevation={1} sx={{ padding: '20px' }}>
                    <div>
                        <h3 className="about-us-content-title">
                            Our <span>Mission</span>
                        </h3>
                    </div>
                    <div className="about-us-content-txt">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
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
                </Paper>
                <Paper elevation={1} sx={{ padding: '20px' }}>
                    <div>
                        <h3 className="about-us-content-title">
                            Our <span>Goals</span>
                        </h3>
                    </div>
                    <div className="about-us-content-txt">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
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
                </Paper>
                <Paper elevation={1} sx={{ padding: '20px' }}>
                    <div>
                        <h3 className="about-us-content-title">
                            Established in <span>2023</span>
                        </h3>
                    </div>
                    <div className="about-us-content-txt">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
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
                </Paper>
            </Container>
            <CarouselFrame />
            <SectionTitle />
        </Container>
    )
}

export default AboutUsContent
