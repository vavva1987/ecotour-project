import { Container, Link } from '@mui/material'
import './FooterStyle.scss'

type Props = {}

const SecondFooterComponent = (props: Props) => {
    return (
        <Container
            className="second-footer-component"
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0',
                height: '240px',
            }}
        >
            <div>
                <h3>Useful links</h3>
                <div className="second-footer-component-item">
                    <Link>Blog</Link>
                    <Link>About Us</Link>
                    <Link>Education</Link>
                    <Link>Contact Us</Link>
                </div>
            </div>
            <div className="recent-posts">
                <h3>Recent Posts</h3>
                <div className="recent-posts-title">
                    <div className="recent-posts-card">
                        <div className="recent-posts-img">
                            <img src="images/men-children.png" alt="" />
                        </div>
                        <div>
                            <Link>Lorem ipsum dolor sit amet</Link>
                            <p className="recent-date">August 2, 2023</p>
                        </div>
                    </div>
                    <div className="recent-posts-card">
                        <div className="recent-posts-img">
                            <img src="/images/men-children.png" alt="" />
                        </div>
                        <div>
                            <Link>Lorem ipsum dolor sit amet</Link>
                            <p className="recent-date">August 2, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SecondFooterComponent
