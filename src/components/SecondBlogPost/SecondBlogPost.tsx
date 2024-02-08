import { Container } from '@mui/material'
import './SecondBlogPost.scss'
import SecondBlogPostImg from './SecondBlogPostImg'
import SecondBlogPostTitle from './SecondBlogPostTitle'

type Props = {}

const SecondBlogPost = (props: Props) => {
    return (
        <Container maxWidth="lg" sx={{ display: 'flex', margin: '64px 0' }}>
            <SecondBlogPostImg />
            <SecondBlogPostTitle />
        </Container>
    )
}

export default SecondBlogPost
