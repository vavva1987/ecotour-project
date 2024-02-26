import { Container, Link } from '@mui/material'
import './Categories.scss'

type Props = {
    disableGutters: boolean
}

const Categories = ({ disableGutters }: Props) => {
    return (
        <Container
            className="categories"
            // sx={{
            //     display: 'flex',
            //     flexDirection: 'column',
            //     margin: '0',
            // }}
            disableGutters={true}
        >
            <h3 className="categories-title">Categories</h3>
            <Container
                className="categories-item"
                sx={{ display: 'flex', flexDirection: 'column' }}
                disableGutters={true}
            >
                <Link>Environment</Link>
                <Link>Go Green</Link>
                <Link>Clean Water</Link>
                <Link>Recycle</Link>
                <Link>Tourism</Link>
            </Container>
        </Container>
    )
}

export default Categories
