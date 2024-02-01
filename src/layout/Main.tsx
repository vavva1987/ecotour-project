import { Container } from '@mui/material'
import BigBlogPost from 'components/BigBlogPosts/BigBlogPost'
import BigBlogPostCard from 'components/BigBlogPosts/BigBlogPostCard'
import CarouselFrame from 'components/CarouselFrame/CarouselFrame'
import MainSmContainer from 'components/MainSmContainer/MainSmContainer'
import SecondBlogPost from 'components/SecondBlogPost/SecondBlogPost'
import SectionContainer from 'components/SectionTitle/SectionContainer'
import SectionTitle from 'components/SectionTitle/SectionTitle'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <MainSmContainer />
            <BigBlogPost />
            <BigBlogPostCard />
            <SectionTitle />
            <SectionContainer />
            <CarouselFrame />
            <SecondBlogPost />
        </Container>
    )
}

export default Main
