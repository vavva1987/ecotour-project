import { Button, Container, Typography } from '@mui/material'

type Props = {}

const BigBlogPostCard = (props: Props) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                padding: '20px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                className="big-blog-post-card"
                sx={{ display: 'flex' }}
            >
                <Container
                    maxWidth="md"
                    className="card-1"
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <div className="card-img">
                        <img src="../images/mask-group.png" alt="" />
                    </div>
                    <div className="card-title">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p className="card-p">Environment, Go green</p>
                        <p>September 7, 2023</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <Button
                            sx={{
                                backgroundColor: '#8AC92A',
                                color: '#ffffff',
                                ':hover': {
                                    color: 'black',
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            Read More
                        </Button>
                    </div>
                </Container>
                <Container className="card-2">
                    <div className="card-img">
                        <img src="../images/men-children.png" alt="" />
                    </div>
                    <div className="card-title">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p className="card-p">Environment, Go green</p>
                        <p>September 7, 2023</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <Button
                            sx={{
                                backgroundColor: '#8AC92A',
                                color: '#ffffff',
                                ':hover': {
                                    color: 'black',
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            Read More
                        </Button>
                    </div>
                </Container>
            </Typography>
        </Container>
    )
}

export default BigBlogPostCard
