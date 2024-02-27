import { Container } from '@mui/material'
import './Contact.scss'
import ContactHeader from './ContactComponents/ContactHeader'

type Props = {}

const Contact = (props: Props) => {
    return (
        <Container sx={{ marginTop: '70px' }}>
            <ContactHeader />
        </Container>
    )
}

export default Contact
