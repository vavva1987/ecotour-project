import { Button, Container } from '@mui/material'

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
            <Container
                maxWidth="md"
                sx={{ display: 'flex', justifyContent: 'center' }}
                className="big-blog-post-card"
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
                                border: '1px solid black',
                                backgroundColor: '#8AC92A',
                                color: '#ffffff',
                                ':hover': {
                                    color: 'black',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid black',
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
                                border: '1px solid black',
                                backgroundColor: '#8AC92A',
                                color: '#ffffff',
                                ':hover': {
                                    color: 'black',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid black',
                                },
                            }}
                        >
                            Read More
                        </Button>
                    </div>
                </Container>
            </Container>
        </Container>
    )
}

export default BigBlogPostCard
