import './topbar.css'

export default function topbar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <div className="topList">
                    <ul>
                        <li className="topListItem">HOME</li>
                        <li className="topListItem">ABOUT</li>
                        <li className="topListItem">CONTACT US</li>
                        <li className="topListItem">WRITE</li>
                        <li className="topListItem">LOGOUT</li>
                    </ul>
                </div>
            </div>
            <div className="topRight">
                <img className='topImg' src="data:image/jpeg;base64,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" alt="img" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
