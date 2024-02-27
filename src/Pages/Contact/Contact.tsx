import { Container } from '@mui/material'
import './Contact.scss'
import ContactHeader from './ContactComponents/ContactHeader'
import ContactContent from './ContactComponents/ContactContent'
import ContactForm from './ContactComponents/ContactForm'

type Props = {}

const Contact = (props: Props) => {
    return (
        <Container sx={{ marginTop: '70px' }}>
            <ContactHeader />
            <Container
                sx={{
                    bgcolor: '#d4d0d0',
                    height: 632,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <ContactContent />
                <ContactForm />
            </Container>
        </Container>
    )
}

export default Contact
