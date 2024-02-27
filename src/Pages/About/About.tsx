import { Container } from '@mui/material'
import AboutUsBgImg from './AboutContent/AboutUsBgImg'
import './About.scss'
import AboutUsTitle from './AboutContent/AboutUsTitle'
import AboutUsContent from './AboutContent/AboutUsContent'

type Props = {}

const About = (props: Props) => {
    return (
        <Container sx={{ marginTop: '50px' }}>
            <AboutUsBgImg />
            <AboutUsTitle />
            <AboutUsContent />
        </Container>
    )
}

export default About
