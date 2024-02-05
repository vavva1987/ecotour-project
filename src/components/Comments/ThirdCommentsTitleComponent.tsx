import { Card, CardContent } from '@mui/material'
import { thirdCommentsArray } from './commentsArray'
import CommentsTitle from './CommentsTitle'

type Props = {}

const ThirdCommentsComponent = (props: Props) => {
    return (
        <Card sx={{ bgcolor: '#f1f0f0' }}>
            <CardContent sx={{ display: 'flex', padding: '10px' }}>
                {thirdCommentsArray.map(({ id, image, title, name }) => (
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

export default ThirdCommentsComponent
