import { Card, CardContent } from '@mui/material'
import { secondCommentsArray } from './commentsArray'
import CommentsTitle from './CommentsTitle'

type Props = {}

const SecondCommentsComponent = (props: Props) => {
    return (
        <Card sx={{ bgcolor: '#f1f0f0' }}>
            <CardContent sx={{ display: 'flex', padding: '10px' }}>
                {secondCommentsArray.map(({ id, image, title, name }) => (
                    <CommentsTitle
                        id={id}
                        image={image}
                        title={title}
                        name={name}
                    />
                ))}
            </CardContent>
        </Card>
    )
}

export default SecondCommentsComponent
