import { Container, Grid, Typography } from '@mui/material'
import '../../layout/Header.css'

type Props = {}

const MainSmContainer = (props: Props) => {
    return (
        <Container
            maxWidth="md"
            className="main-sm-container"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                className="main-title"
                sx={{ display: 'block', textAlign: 'center' }}
            >
                <h2>Our Mission</h2>
                <p className="p1">
                    what are we <span>working</span> for
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{' '}
                </p>
                <Grid item xs={4}>
                    <div>
                        <a href="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore{' '}
                        </a>
                    </div>
                    <div>
                        <a href="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore{' '}
                        </a>
                    </div>
                    <div>
                        <a href="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore{' '}
                        </a>
                    </div>
                    <div>
                        <a href="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore{' '}
                        </a>
                    </div>
                </Grid>
            </Typography>
        </Container>
    )
}

export default MainSmContainer
