import { Container } from '@mui/material'
import FirstEducationCard from './FirstEducationCard'
import SecondEducationCard from './SecondEducationCard'

type Props = {}

const ChildrenEducationCard = (props: Props) => {
    return (
        <Container sx={{ display: 'flex' }}>
            <FirstEducationCard />
            <SecondEducationCard />
        </Container>
    )
}

export default ChildrenEducationCard
