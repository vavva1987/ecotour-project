import { Container } from '@mui/material'
import './Comments.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import FirstCommentsComponent from './FirstCommentsComponent'
import SecondCommentsComponent from './SecondCommentsComponent'
import ThirdCommentsComponent from './ThirdCommentsTitleComponent'

type Props = {}

const Comments = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#f1f0f0', border: 'none' }}>
            <div className="comments-title">
                <h2>Featured comments</h2>
            </div>
            <Slider {...settings}>
                <FirstCommentsComponent />
                <SecondCommentsComponent />
                <ThirdCommentsComponent />
            </Slider>
        </Container>
    )
}

export default Comments
