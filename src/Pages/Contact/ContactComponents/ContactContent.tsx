import { Container } from '@mui/material'
import '../Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailIcon from '@mui/icons-material/Mail'

type Props = {}

const ContactContent = (props: Props) => {
    return (
        <Container
            className="contact-content"
            maxWidth="sm"
            sx={{ display: 'flex', flexDirection: 'column' }}
        >
            <div className="contact-content-title">
                <p>We’d love to hear from you</p>
            </div>
            <div className="email-us">
                <h4>Email us</h4>
                <p>contactus@ekotur.rs</p>
            </div>
            <div className="social-us">
                <h4>Connect with us</h4>
                <div>
                    <FacebookIcon sx={{ ':hover': { color: '#8ac92a' } }} />
                    <TwitterIcon sx={{ ':hover': { color: '#8ac92a' } }} />
                    <LinkedInIcon sx={{ ':hover': { color: '#8ac92a' } }} />
                    <InstagramIcon sx={{ ':hover': { color: '#8ac92a' } }} />
                    <MailIcon sx={{ ':hover': { color: '#8ac92a' } }} />
                </div>
            </div>
        </Container>
    )
}

export default ContactContent
