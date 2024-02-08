import { Button, Card, CardContent } from '@mui/material'
import './ChildrenEducation.scss'

type Props = {}

const SecondEducationCard = (props: Props) => {
    return (
        <Card className="first-education-card" sx={{ display: 'flex' }}>
            <CardContent className="first-education-card-img">
                <img src="/images/mask-group.png" alt="" />
            </CardContent>
            <CardContent className="first-education-card-title">
                <h4>Lorem ipsum dolor sit amet</h4>
                <p className="first-education-card-type">
                    Environment, Go green
                </p>
                <p className="first-education-card-date">September 7, 2023</p>
                <p className="first-education-card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                </p>
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: '#8ac92a',
                        width: '139px',
                        height: '44px',
                        color: '#ffffff',
                        border: '1px solid black',
                        ':hover': {
                            color: 'black',
                            backgroundColor: '#ffffff',
                            border: '1px solid black',
                        },
                        fontFamily: 'Raleway',
                        fontSize: '14px',
                        fontWeight: '700',
                        fontStyle: 'normal',
                    }}
                >
                    Read more
                </Button>
            </CardContent>
        </Card>
    )
}

export default SecondEducationCard
