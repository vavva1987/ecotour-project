import HeaderBackgroundTitle from './HeaderBackgroundTitle'
import '../../layout/Header.css'

type Props = {}

const HeaderBackground = (props: Props) => {
    return (
        <div className="header-background">
            <div className="header-background-img">
                <HeaderBackgroundTitle />
            </div>
        </div>
    )
}

export default HeaderBackground
