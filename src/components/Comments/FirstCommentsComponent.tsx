import { Container } from '@mui/material'
import CommentsTitle from './CommentsTitle'
import { firstCommentsArray } from './commentsArray'

type Props = {}

const FirstCommentsComponent = (props: Props) => {
    return (
        <Container sx={{ display: 'flex', padding: '10px' }}>
            {firstCommentsArray.map(({ id, image, title, name }) => (
                <CommentsTitle
                    id={id}
                    image={image}
                    title={title}
                    name={name}
                />
            ))}
        </Container>
    )
}

export default FirstCommentsComponent
