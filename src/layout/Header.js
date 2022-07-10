import {Link} from 'react-router-dom' ;
export default function Header(){

    return <header>
    <>
        <div className="logo">
            <img src={process.env.PUBLIC_URL + '/images/logo/e.png'} alt=""/>
            <h3>Karol Movie</h3>
        </div>
        <div className="nav">
            <ul>
               <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/">Genere</Link></li>
                <li><Link to="/">Series</Link></li>
            </ul>
        </div>
        <div className="user">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
            <Link to="">Login</Link>
        </div>
    </>
    </header>
}