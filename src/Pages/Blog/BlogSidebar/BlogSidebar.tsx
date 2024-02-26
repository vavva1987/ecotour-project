import { Container, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Categories from './SidebarPages/Categories/Categories'
import RecentPosts from './SidebarPages/RecentPosts/RecentPosts'
import Keywords from './SidebarPages/Keywords/Keywords'

type Props = {}

const BlogSidebar = (props: Props) => {
    return (
        <Container
            maxWidth="xs"
            className="blog-sidebar"
            sx={{ margin: '0', padding: '0', width: '250px' }}
        >
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
            <Categories disableGutters />
            <RecentPosts />
            <Keywords />
        </Container>
    )
}

export default BlogSidebar
