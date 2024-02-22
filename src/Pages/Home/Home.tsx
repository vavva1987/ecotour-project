import { Container } from '@mui/material'
import Header from 'layout/Header'
import Main from 'layout/Main'

type Props = {}

const Home = (props: Props) => {
    return (
        <Container>
            <Header />
            <Main />
        </Container>
    )
}

export default Home
