import { Box, Button, Container, TextField } from '@mui/material'
import '../Contact.scss'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import { styled } from '@mui/system'

type Props = {}

const ContactForm = (props: Props) => {
    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    }

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 355px;
        font-family: 'Raleway', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 2px solid ${
            theme.palette.mode === 'dark' ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
            theme.palette.mode === 'dark' ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: #000000;
        }
    
        &:focus {
          border-color: #0000ff;
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
    )

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 450,
                marginTop: '30px',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <form action="">
                    <Box sx={{ display: 'flex' }}>
                        <TextField
                            label="Your Name..."
                            size="small"
                            sx={{
                                marginRight: '20px',
                                bgcolor: '#ffffff',
                            }}
                        />
                        <TextField
                            label="Your Email..."
                            size="small"
                            sx={{ marginLeft: '20px', bgcolor: '#ffffff' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            label="Your Subject..."
                            fullWidth
                            sx={{ margin: '15px', bgcolor: '#ffffff' }}
                        />
                        <Textarea aria-label="Your Message" minRows={5} />
                    </Box>
                    <Button
                        sx={{
                            marginTop: '15px',
                            border: '1px solid black',
                            backgroundColor: '#8AC92A',
                            color: '#ffffff',
                            ':hover': {
                                color: 'black',
                                backgroundColor: '#ffffff',
                                border: '1px solid black',
                            },
                        }}
                    >
                        Send Message
                    </Button>
                </form>
            </Container>
        </Container>
    )
}

export default ContactForm
