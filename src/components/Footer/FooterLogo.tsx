import logo from '../../assets/brand-logo(1).png'
import './FooterStyle.scss'

type Props = {}

const FooterLogo = (props: Props) => {
    return <img className="footer-logo" src={logo} alt={logo} />
}

export default FooterLogo
