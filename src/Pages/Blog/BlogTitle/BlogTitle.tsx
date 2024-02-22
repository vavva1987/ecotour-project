import { Container } from '@mui/material'

type Props = {}
const BlogTitle = (props: Props) => {
    return (
        <Container
            className="blog-title"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="blog-title-component">
                <h2>Blog Page</h2>
            </div>
        </Container>
    )
}
export default BlogTitle
