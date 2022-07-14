
import logo from '../../src/image/figma-logo.png'
import telegram from '../../src/image/telegram-logo.png'
import hand from '../../src/image/hand.png'
import chat from '../../src/image/chat-logo.png'


export const Navbar = () => {
    return (

        <>

            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand">
                        <img src={logo} className="abc" alt="logo" width="25" height="25"/>
                        <img src={telegram} className="tele" alt="logo" width="30" height="30"/>
                        <img src={hand} className="hand" alt="logo" width="30" height="30"/>
                        <img src={chat} className="chat" alt="logo" width="30" height="30"/>
                    </a>
                    <div className="txt">
                    <p className="grp">Groups - copy</p>
                    <p className="view">View only</p>
                    </div>
                    
                </div>
            </nav>

        </>


    )
}
