import { Container } from '@mui/material'
import MainSmContainer from 'components/MainSmContainer/MainSmContainer'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <MainSmContainer />
        </Container>
    )
}

export default Main
