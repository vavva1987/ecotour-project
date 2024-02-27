import { Container } from '@mui/material'
import '../Contact.scss'

type Props = {}

const ContactHeader = (props: Props) => {
    return (
        <Container
            maxWidth="xl"
            className="contact-header"
            sx={{
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>Contact Us</h1>
        </Container>
    )
}

export default ContactHeader
