import { Button, Card, CardContent } from '@mui/material'

type Props = {
    id: number
    title: string
    type: string
    date: string
    description: string
    images: string
}

const SectionTitleContent = ({
    id,
    title,
    type,
    date,
    description,
    images,
}: Props) => {
    return (
        <Card key={id}>
            <CardContent
                className="section-title-content"
                sx={{ variant: 'outlined' }}
            >
                <img className="section-img" src={images} alt={title} />

                <h3 className="section-title">{title}</h3>

                <p className="section-type">{type}</p>

                <p className="section-date">{date}</p>

                <p className="section-description">{description}</p>

                <Button
                    variant="outlined"
                    sx={{
                        color: 'black',
                        border: '1px solid black',
                        ':hover': {
                            backgroundColor: '#8ac92a',
                            color: 'white',
                            border: '1px solid white',
                        },
                    }}
                >
                    Read more
                </Button>
            </CardContent>
        </Card>
    )
}

export default SectionTitleContent
