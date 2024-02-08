import { Card, CardContent } from '@mui/material'
import './Comments.scss'

type Props = {
    id: number
    image: string
    title: string
    name: string
}

const CommentsTitle = ({ image, title, name }: Props) => {
    return (
        <Card sx={{ margin: '10px' }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div className="slide-comments-img">
                    <img src={image} alt="" />
                </div>
                <div className="slide-comments-title">
                    <p>{title}</p>
                </div>
                <div className="border-slide"></div>
                <div className="slide-comments-name">
                    <p>{name}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default CommentsTitle
