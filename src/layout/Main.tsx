import { Container } from '@mui/material'
import BigBlogPost from 'components/BigBlogPosts/BigBlogPost'
import MainSmContainer from 'components/MainSmContainer/MainSmContainer'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <MainSmContainer />
            <BigBlogPost />
        </Container>
    )
}

export default Main
