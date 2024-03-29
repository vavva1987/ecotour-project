import { Card, CardContent } from '@mui/material'

type Props = {
    id: number
    image: string
    title: string
    name: string
}

const CarouselFrameSlide = ({ id, image, title, name }: Props) => {
    return (
        <Card key={id}>
            <CardContent
                className="carousel-frame-slide"
                sx={{
                    variant: 'outlined',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div className="slide-img">
                    <img src={image} alt={title} />
                </div>
                <div>
                    <p className="slide-title">{title}</p>
                </div>
                <div className="border-slide"></div>
                <div>
                    <p className="slide-name">{name}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default CarouselFrameSlide
