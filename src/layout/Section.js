
import {useState, useEffect} from 'react';
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import {Link} from "react-router-dom";
import MovieList from "../component/MovieList";
export default function Section() {
    console.log("Section");
    const [sectionList, setSectionList] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3003/section')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setSectionList(data);
            })
    },[]);
    return <>
        {/*LATEST MOVIES SECTION*/}
        <Section1/>
        {/***********************/}
        {/*HOLLYWOOD MOVIES SECTION*/}
        {
            sectionList.map((section,index) =>(
                <section key={section.id}>
                    <div className={`${section.name}-movies`}>
                        <h1>{`${section.name}`.toUpperCase()} MOVIES</h1>
                        <div className="section-container">
                            <MovieList sectionSeq={section.id}/>
                        </div>
                    </div>
                    <div className={`more${index+1}`}>
                        <Link to="">View More</Link>
                    </div>
                </section>
            ))
        }

        {/**************************/}
        {/* YOUTUBE CONTENT SECTION*/}
        <section className="akira">
            <div className="line">
                <div className="yt-movies">
                    <h1>YOUTUBE MOVIES</h1>
                    <p>BLOCKBUSTER OF THE MONTH</p>
                    <div className="yt-container">
                        <div className="inside-yt">
                            <img src="../images/yt/1.jpg" alt=""/>
                            <div className="heading2">
                                <p>ASPIRANTS</p>
                                <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                                <div className="like">
                                    <span><i className="fas fa-thumbs-up"></i></span>
                                    <p>2022</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="inside-yt">
                            <img src="../images/yt/1.jpg" alt=""/>
                            <div className="heading2">
                                <p>ASPIRANTS</p>
                                <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                                <div className="like">
                                    <span><i className="fas fa-thumbs-up"></i></span>
                                    <p>2022</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="inside-yt">
                            <img src="../images/yt/1.jpg" alt=""/>
                            <div className="heading2">
                                <p>ASPIRANTS</p>
                                <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                                <div className="like">
                                    <span><i className="fas fa-thumbs-up"></i></span>
                                    <p>2022</p>
                                </div>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
}