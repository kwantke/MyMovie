import {Link} from 'react-router-dom';
export default function Section1(){

    return <div className="latest-movies" id="movies">
            <h1>TRENDING ON MAMA BRO</h1>
            <div className="latest-container">
                {/*repeat*/}
                <div className="latest-inside">
                    <img src="../images/horizantal/1.jpg" alt=""/>
                    <div className="heading1">
                        <h4>Lucifer</h4>
                        <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                        <h6>Action</h6>
                    </div>
                    <div className="btn2">
                        <Link to="">Watch Now</Link>
                    </div>
                </div>
                {/*repeat end */}
                <div className="latest-inside">
                    <img src="../images/horizantal/2.jpg" alt=""/>
                    <div className="heading1">
                        <h4>Lucifer 2</h4>
                        <p><span>&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>
                        <h6>Action</h6>
                    </div>
                    <div className="btn2">
                        <Link to="">Watch Now</Link>
                    </div>
                </div>
                <div className="latest-inside">
                    <img src="../images/horizantal/3.jpg" alt=""/>
                    <div className="heading1">
                        <h4>Money</h4>
                        <p><span>&#9733;&#9733;&#9734;&#9734;&#9734;</span></p>
                        <h6>Sci-fi</h6>
                    </div>
                    <div className="btn2">
                        <Link to="">Watch Now</Link>
                    </div>
                </div>
                <div className="latest-inside">
                    <img src="../images/horizantal/4.jpg" alt=""/>
                    <div className="heading1">
                        <h4>Jack</h4>
                        <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                        <h6>Drama</h6>
                    </div>
                    <div className="btn2">
                        <Link to="">Watch Now</Link>
                    </div>
                </div>
                <div className="latest-inside">
                    <img src="../images/horizantal/5.jpg" alt=""/>
                    <div className="heading1">
                        <h4>Johnny</h4>
                        <p><span>&#9733;&#9733;&#9733;&#9734;&#9734;</span></p>
                        <h6>Romance</h6>
                    </div>
                    <div className="btn2">
                        <Link to="">Watch Now</Link>
                    </div>
                </div>
            </div>
        </div>
}