import {Link} from 'react-router-dom';
export default function Section2(props){

    return (
        <section>
            <div className="hollywood-movies">
                <h1>HOLLYWOOD MOVIES</h1>
                <div className="hollywood-container">
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/2.jpg" alt=""/>
                        <h3>TENET</h3>
                        <div className="imdb">
                            <p>9.8</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more1">
                <Link to="">View More</Link>
            </div>
        </section>
    )
}

/*
<section>
            <div className="hollywood-movies">
                <h1>HOLLYWOOD MOVIES</h1>
                <div className="hollywood-container">
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/2.jpg" alt=""/>
                        <h3>TENET</h3>
                        <div className="imdb">
                            <p>9.8</p>
                        </div>
                    </div>
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/12.jpg" alt=""/>
                        <h3>WW 84</h3>
                        <div className="imdb">
                            <p>8.5</p>
                        </div>
                    </div>
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/13.jpg" alt=""/>
                        <h3>MONOCHROME</h3>
                        <div className="imdb">
                            <p>9.4</p>
                        </div>
                    </div>
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/14.jpg" alt=""/>
                        <h3>MORTAL</h3>
                        <div className="imdb">
                            <p>9.3</p>
                        </div>
                    </div>
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/15.jpg" alt=""/>
                        <h3>DONT LOOK BACK</h3>
                        <div className="imdb">
                            <p>9.5</p>
                        </div>
                    </div>
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/3.jpg" alt=""/>
                        <h3>BLOOKD HOUND</h3>
                        <div className="imdb">
                            <p>9.2</p>
                        </div>
                    </div>
                    <div className="hollywood-inside">
                        <img src="../images/hollywood/1.jpg" alt=""/>
                        <h3>REUNION</h3>
                        <div className="imdb">
                            <p>9.9</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more1">
                <Link to="">View More</Link>
            </div>
        </section>
* */