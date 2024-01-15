import { Button, Container, Grid } from '@mui/material'
import './BigBlogPost.css'

type Props = {}

const BigBlogPost = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <Container
                className="blog-post-title"
                maxWidth="md"
                sx={{ textAlign: 'center' }}
            >
                <div>
                    <h2>
                        Latest <span>posts</span>
                    </h2>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore{' '}
                    </p>
                </div>
            </Container>
            <Grid className="blog-post-content">
                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                    <div className="blog-post-img">
                        <img src="../images/img(1).png" alt="" />
                    </div>
                    <Container
                        maxWidth="xs"
                        className="blog-post-txt"
                        sx={{ display: 'block' }}
                    >
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>September 7, 2023</p>
                        <p className="blog-post-txt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <Button
                            sx={{
                                color: '#ffffff',
                                ':hover': {
                                    color: 'black',
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            Read more
                        </Button>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BigBlogPost
