import { Container, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type Props = {}

const BlogSidebar = (props: Props) => {
    return (
        <Container className="blog-sidebar">
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 300,
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search article"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton
                    type="button"
                    sx={{
                        p: '10px',
                        width: 30,
                        height: 30,
                        bgcolor: 'black',
                        color: '#ffffff',
                        ':hover': { bgcolor: '#8ac92a' },
                    }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>
    )
}

export default BlogSidebar
