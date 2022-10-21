import "./header.css"

export default function header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgK5nYvg1oz6b3JJlw-hohWlZ7zZkeIQATA&usqp=CAU" alt="" className="headerImg" />
        </div>
    )
}

