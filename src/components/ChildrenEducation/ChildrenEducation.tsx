import { Container } from '@mui/material'
import './ChildrenEducation.scss'
import ChildrenEducationCard from './ChildrenEducationCard'

type Props = {}

const ChildrenEducation = (props: Props) => {
    return (
        <Container
            className="children-education"
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Container
                className="children-education-title"
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '40px',
                }}
            >
                <h2>
                    Education for <span>children</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{' '}
                </p>
            </Container>
            <ChildrenEducationCard />
        </Container>
    )
}

export default ChildrenEducation
