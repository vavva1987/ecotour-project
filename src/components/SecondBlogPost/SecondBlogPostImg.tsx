import './SecondBlogPost.scss'
import image from '../../assets/col-6.png'

type Props = {}

const SecondBlogPostImg = (props: Props) => {
    return (
        <>
            <img className="second-blog-img" src={image} alt="" />
        </>
    )
}

export default SecondBlogPostImg
