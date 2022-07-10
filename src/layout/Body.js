import {Link} from 'react-router-dom';
import Section1 from '../component/Section1';
export default function Body() {
    console.log("Body");
    return  <section>
            <div className="heropage">
                <div className="inside-heropage">
                    <span>NOW STREAMING</span>
                    <div className="line1"></div>
                    <h1>PEAKY BLINDERS</h1>
                    <p>Action,Drama,Sci-fi | 2021 | INDIA | 142min</p>
                    <div className="btn1">
                        <Link to=""><i className="fa-solid fa-play"></i>Watch Now</Link>
                        <Link to=""><i className="fa-solid fa-heart"></i>Watch Later</Link>
                    </div>
                </div>
            </div>
            <div className="poster">
                <img src={process.env.PUBLIC_URL + "/images/hero page/3.jpg"} alt="" />
            </div>
        </section>


}