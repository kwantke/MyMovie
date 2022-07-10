
import {useState, useEffect} from 'react';
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import {Link} from "react-router-dom";
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
            sectionList.map(section =>(
                <section key={section.id}>
                    <div className={`${section.name}-movies`}>
                        <h1>{`${section.name}`.toUpperCase()} MOVIES</h1>
                        <div className={`${section.name}-container`}>

                        </div>
                    </div>
                    <div className="more1">
                        <Link to="">View More</Link>
                    </div>
                </section>

            ))
        }

        {/**************************/}
    </>
}