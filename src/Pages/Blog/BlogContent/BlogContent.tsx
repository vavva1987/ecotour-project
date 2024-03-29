import { Button, Grid } from '@mui/material'

type Props = {}

const BlogContent = (props: Props) => {
    return (
        <Grid
            container
            maxWidth="xs"
            rowSpacing={1}
            columnSpacing={3}
            sx={{
                margin: '0',
                padding: '0',
                borderBottom: '1px solid #8ac92a',
            }}
        >
            <Grid
                item
                xs={5}
                className="blog-content"
                sx={{ margin: '0', padding: '0' }}
            >
                <div>
                    <img src="/images/img.png" alt="" />
                </div>
                <div>
                    <h3 className="blog-content-title">Blog Title</h3>
                    <p className="blog-content-type">Environment, Go green</p>
                    <p className="blog-content-date">September 7, 2023</p>
                    <p className="blog-content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{' '}
                    </p>
                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: '15px',
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Read more
                    </Button>
                </div>
            </Grid>
            <Grid item xs={5} className="blog-content">
                <div>
                    <img src="/images/img.png" alt="" />
                </div>
                <div>
                    <h3 className="blog-content-title">Blog Title</h3>
                    <p className="blog-content-type">Environment, Go green</p>
                    <p className="blog-content-date">September 7, 2023</p>
                    <p className="blog-content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{' '}
                    </p>
                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: '15px',
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Read more
                    </Button>
                </div>
            </Grid>

            <Grid item xs={5} className="blog-content">
                <div>
                    <img src="/images/img.png" alt="" />
                </div>
                <div>
                    <h3 className="blog-content-title">Blog Title</h3>
                    <p className="blog-content-type">Environment, Go green</p>
                    <p className="blog-content-date">September 7, 2023</p>
                    <p className="blog-content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{' '}
                    </p>
                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: '15px',
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Read more
                    </Button>
                </div>
            </Grid>
            <Grid item xs={5} className="blog-content">
                <div>
                    <img src="/images/img.png" alt="" />
                </div>
                <div>
                    <h3 className="blog-content-title">Blog Title</h3>
                    <p className="blog-content-type">Environment, Go green</p>
                    <p className="blog-content-date">September 7, 2023</p>
                    <p className="blog-content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{' '}
                    </p>
                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: '15px',
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Read more
                    </Button>
                </div>
            </Grid>

            <Grid item xs={5} className="blog-content">
                <div>
                    <img src="/images/img.png" alt="" />
                </div>
                <div>
                    <h3 className="blog-content-title">Blog Title</h3>
                    <p className="blog-content-type">Environment, Go green</p>
                    <p className="blog-content-date">September 7, 2023</p>
                    <p className="blog-content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{' '}
                    </p>
                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: '15px',
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Read more
                    </Button>
                </div>
            </Grid>
            <Grid item xs={5} className="blog-content">
                <div>
                    <img src="/images/img.png" alt="" />
                </div>
                <div>
                    <h3 className="blog-content-title">Blog Title</h3>
                    <p className="blog-content-type">Environment, Go green</p>
                    <p className="blog-content-date">September 7, 2023</p>
                    <p className="blog-content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore{' '}
                    </p>
                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: '15px',
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Read more
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default BlogContent
