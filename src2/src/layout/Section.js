
import {useState, useEffect} from 'react';
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import {Link} from "react-router-dom";
import MovieList from "../component/MovieList";
import useFetch from "../hook/useFetch";
import MovieYtList from "../component/MovieYtList";
export default function Section() {
    console.log("Section");
    const sectionList = useFetch("http://localhost:3003/section");

    /*const [sectionList, setSectionList] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3003/section')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setSectionList(data);
            })
    },[]);*/
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
            <div className="line"></div>
            <div className="yt-movies">
                <h1>YOUTUBE MOVIES</h1>
                <p>BLOCKBUSTER OF THE MONTH</p>
                <MovieYtList sectionCode="YT" />
            </div>

        </section>
        <div className="youtubebtn">
            <Link to="">Watch More<i className="fa-brands fa-youtube"></i></Link>
        </div>
    </>
}