import React from 'react';

const Main = () =>(
<div className="wrapper">
<main>
<section class="movies restOfMovies">
    <article> 
        <div class="box">
            <img  className="image" src={require("../images/movies/GH_Poster.jpg")} alt="Gretel and Hunsel poster"/>
            <div className ="overlay">
                <div className="info"> 
                <h3 className="info-header">Movie Title</h3>
                <p>information about the movie</p>
                <button>More info</button>
                </div>

            </div>
            <div class="rating">
                <img class="star" src={require("../images/icons/Star_rating.jpg")}  alt="rating"/>
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    {/* <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/loge.jpg" alt="lodge poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/Star_war.jpg" alt="Star_war poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/Dolittle.jpg" alt="Dolittle poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/1917.jpg" alt="1917 poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/Godfather.jpg" alt="Godfather poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div>
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/JohnWick.jpg" alt="JohnWick poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/lesMiscirables.jpg" alt="lesMiscirables poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div>
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/Dolittle.jpg" alt="Dolittle poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article>
    <article> 
        <div class="box">
            <a href="/index.html"><img src="images/movies/1917.jpg" alt="1917 poster"></a>
            <div class="rating">
                <img class="star" src="images/icons/Star_rating.jpg" alt="rating">
                <button class="heart">❤</button>
             </div> 
        </div>
    </article> */}
</section>
</main>
</div>// end of wrapper


);

export default Main;