import useFetch from "../hook/useFetch";

export default function MovieYtList({sectionCode}) {
    const movieYtList = useFetch(`http://localhost:3003/movie?sectionCode=${sectionCode}`)
    console.log(movieYtList);
    function star(star){
        let starCount = "";
        for(let i=1;i<=5;i++){
            if(i<=star){
                starCount +="★"
            }else{
                starCount +="☆"
            }
        }
        return starCount;
    }
    return(
        <div className="yt-container">
            {
                movieYtList.map((movieYt,index) =>(
                    <div className="inside-yt" key={movieYt.id}>
                        <img src={movieYt.img} alt=""/>
                        <div className="heading2">
                            <p>{movieYt.name}</p>
                            <p><span>{star(`${movieYt.star}`)}</span></p>
                            <div className="like">
                                <span><i className="fas fa-thumbs-up">{movieYt.like}K</i></span>
                                <p>{movieYt.movieYear}</p>
                            </div>
                            <p></p>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}
/*
 <div className="inside-yt">
                <img src="../images/yt/1.jpg" alt=""/>
                <div className="heading2">
                    <p>ASPIRANTS</p>
                    <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                    <div className="like">
                        <span><i className="fas fa-thumbs-up">200K</i></span>
                        <p>2022</p>
                    </div>
                    <p></p>
                </div>
            </div>
            <div className="inside-yt">
                <img src="../images/yt/2.jpg" alt=""/>
                <div className="heading2">
                    <p>KOTA FACTORU</p>
                    <p><span>&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>
                    <div className="like">
                        <span><i className="fas fa-thumbs-up">50K</i></span>
                        <p>2018</p>
                    </div>
                    <p></p>
                </div>
            </div>
            <div className="inside-yt">
                <img src="../images/yt/3.jpg" alt=""/>
                <div className="heading2">
                    <p>SOFTWARE DEV</p>
                    <p><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                    <div className="like">
                        <span><i className="fas fa-thumbs-up">100K</i></span>
                        <p>2019</p>
                    </div>
                    <p></p>
                </div>
            </div>

* */