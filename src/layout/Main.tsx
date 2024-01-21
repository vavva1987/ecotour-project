import { Container } from '@mui/material'
import BigBlogPost from 'components/BigBlogPosts/BigBlogPost'
import BigBlogPostCard from 'components/BigBlogPosts/BigBlogPostCard'
import MainSmContainer from 'components/MainSmContainer/MainSmContainer'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <MainSmContainer />
            <BigBlogPost />
            <BigBlogPostCard />
        </Container>
    )
}

export default Main
