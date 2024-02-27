import { Container } from '@mui/material'
import '../Contact.scss'

type Props = {}

const ContactForm = (props: Props) => {
    return (
        <Container
            maxWidth="sm"
            sx={{ display: 'flex', flexDirection: 'column', width: 300 }}
        >
            ContactForm
        </Container>
    )
}

export default ContactForm
