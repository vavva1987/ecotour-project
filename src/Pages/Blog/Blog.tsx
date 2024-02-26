import { Container } from '@mui/material'
import './Blog.scss'
import BlogTitle from './BlogTitle/BlogTitle'
import BlogContent from './BlogContent/BlogContent'
import BlogSidebar from './BlogSidebar/BlogSidebar'

type Props = {}

const Blog = (props: Props) => {
    return (
        <Container className="blog">
            <BlogTitle />
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '50px',
                }}
            >
                <BlogContent />
                <BlogSidebar />
            </Container>
        </Container>
    )
}

export default Blog
