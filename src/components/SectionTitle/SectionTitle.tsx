import { Button, Card, CardContent, Container, Grid } from '@mui/material'
import './SectionTitle.scss'
import SectionTitleContent from './SectionTitleContent'
import { sectionArray } from 'utils/productsArray'

type Props = {
    id?: number
    title?: string
    type?: string
    date?: string
    description?: string
    images?: string
}

const SectionTitle = (props: Props) => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '65px' }}>
            <Card>
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '100px',
                    }}
                >
                    <div className="section-title">
                        <div>
                            <h2>
                                Latest <span>posts</span>
                            </h2>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore{' '}
                            </p>
                        </div>
                    </div>

                    <Button
                        className="section-title-btn"
                        variant="outlined"
                        sx={{
                            width: '139px',
                            height: '44px',
                            color: 'black',
                            border: '1px solid black',
                            ':hover': {
                                color: '#ffffff',
                                backgroundColor: '#8ac92a',
                                border: '1px solid black',
                            },
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontStyle: 'normal',
                        }}
                    >
                        Show more
                    </Button>
                </CardContent>
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Container></Container>
                    {sectionArray.map(
                        ({ id, title, type, date, description, images }) => (
                            <SectionTitleContent
                                id={id}
                                title={title}
                                type={type}
                                date={date}
                                description={description}
                                images={images}
                            />
                        )
                    )}
                </Grid>
            </Card>
        </Container>
    )
}

export default SectionTitle
