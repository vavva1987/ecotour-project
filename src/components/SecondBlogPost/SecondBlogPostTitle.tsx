import { Button, Container } from '@mui/material'
import './SecondBlogPost.scss'

type Props = {}

const SecondBlogPostTitle = (props: Props) => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            <p className="date">
                April
                <span className="span-1">22</span>
                <span className="span-1">nd</span>
            </p>
            <h3>Earth Day</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore{' '}
            </p>
            <Button
                variant="outlined"
                sx={{
                    backgroundColor: '#8ac92a',
                    width: '139px',
                    height: '44px',
                    color: '#ffffff',
                    border: '1px solid black',
                    ':hover': {
                        color: 'black',
                        backgroundColor: '#ffffff',
                        border: '1px solid black',
                    },
                    fontFamily: 'Raleway',
                    fontSize: '14px',
                    fontWeight: '700',
                    fontStyle: 'normal',
                }}
            >
                learn more
            </Button>
        </Container>
    )
}

export default SecondBlogPostTitle
