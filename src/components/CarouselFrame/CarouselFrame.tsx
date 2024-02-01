import { Container } from '@mui/material'
import { frameSlide } from './carouselSlide'
import CarouselFrameSlide from './CarouselFrameSlide'
import './CarouselFrame.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'

type Props = {}

const CarouselFrame = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Container
            maxWidth="lg"
            className="carousel-frame"
            sx={{
                backgroundImage: '/public/images/bg-frame-slider.jpg',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover,',
                maxWidth: '1000px',
                height: '200px',
            }}
        >
            <div className="carousel-frame-title">
                <h2>
                    Inspirational <span>quotes</span>
                </h2>
            </div>
            <Container className="carousel-frame-slide">
                <Slider {...settings}>
                    {' '}
                    {frameSlide.map(({ id, title, name, image }) => (
                        <CarouselFrameSlide
                            id={id}
                            title={title}
                            name={name}
                            image={image}
                        />
                    ))}
                </Slider>
            </Container>
        </Container>
    )
}

export default CarouselFrame
