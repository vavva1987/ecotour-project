import { Button, Container } from '@mui/material'
import './BigBlogPost.scss'

type Props = {}

const BigBlogPost = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                marginBottom: '30px',
            }}
        >
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
            <Container maxWidth="lg" className="blog-post-content">
                <Container maxWidth="md" className="blog-post-img">
                    <img src="../images/img(1).png" alt="" />
                </Container>
                <Container
                    maxWidth="xs"
                    className="blog-post-txt"
                    sx={{ display: 'block' }}
                >
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>September 7, 2023</p>
                    <p className="blog-post-txt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
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
            </Container>
        </Container>
    )
}

export default BigBlogPost
