import { Container, Link } from '@mui/material'
import './SectionTitle.scss'

type Props = {}

const SectionContainer = (props: Props) => {
    return (
        <Container maxWidth="lg" className="section-container">
            <div className="section-container-img"></div>
            <div className="section-container-title">
                <h2>
                    Polls <span>& Surveys</span>
                </h2>
                <p className="section-container-txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{' '}
                </p>
            </div>
            <Container
                className="section-survey-options"
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div className="survey-options">
                    <Link
                        className="survey-options-link"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            margin: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src="/images/avatar.png" alt="" />
                        <span>Lorem ipsum</span>
                    </Link>
                    <Link
                        className="survey-options-link"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            margin: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src="/images/avatar(1).png" alt="" />
                        <span>Lorem ipsum</span>
                    </Link>
                </div>
                <div className="survey-options">
                    <Link
                        className="survey-options-link"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            margin: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src="/images/avatar(2).png" alt="" />
                        <span>Lorem ipsum</span>
                    </Link>
                    <Link
                        className="survey-options-link"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            margin: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src="/images/avatar(3).png" alt="" />
                        <span>Lorem ipsum</span>
                    </Link>
                </div>
            </Container>
        </Container>
    )
}

export default SectionContainer
