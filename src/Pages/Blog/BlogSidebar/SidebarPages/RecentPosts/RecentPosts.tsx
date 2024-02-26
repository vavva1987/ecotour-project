import { Container, Link } from '@mui/material'
import './RecentPosts.scss'

type Props = {}

const RecentPosts = (props: Props) => {
    return (
        <Container className="sidebar-recent" disableGutters={true}>
            <div className="sidebar-recent-title">
                <h3>Recent Posts</h3>
            </div>
            <div className="sidebar-recent-card">
                <div className="sidebar-recent-img">
                    <img src="images/men-children.png" alt="" />
                </div>
                <div>
                    <Link>Lorem ipsum dolor sit amet</Link>
                    <p className="sidebar-recent-date">August 2, 2023</p>
                </div>
            </div>
            <div className="sidebar-recent-card">
                <div className="sidebar-recent-img">
                    <img src="/images/men-children.png" alt="" />
                </div>
                <div>
                    <Link>Lorem ipsum dolor sit amet</Link>
                    <p className="sidebar-recent-date">August 2, 2023</p>
                </div>
            </div>
            <div className="sidebar-recent-card">
                <div className="sidebar-recent-img">
                    <img src="images/men-children.png" alt="" />
                </div>
                <div>
                    <Link>Lorem ipsum dolor sit amet</Link>
                    <p className="sidebar-recent-date">August 2, 2023</p>
                </div>
            </div>
        </Container>
    )
}

export default RecentPosts
