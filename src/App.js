import React from "react";
//import faker from "faker";

const App = () => {

    return(
        <div className="ui comments">
            <div className="comment">
                {/*  <a className="avatar" href="/">  */}
                    <img alt="" src="" /> {/*src={faker.image.avatar()} resimleri random göstermek için yazdık fakat
                     hata aldığımdan dolayı resimleri göstermeyecğim hatayı bakıyorum daha tam çözemedim çözünce döneceğim*/}
                {/*  </a> */}
                <div className="content">
                    <a className="author" href="/">Ozan Mert Karaca</a>
                    <div className="metadata">
                        <div className="date">2 days ago</div>
                         <div className="rating">
                            <i className="star icon"></i>
                            5 Star
                        </div>
                    </div>
                    <div className="text">
                        Daha Başındayız...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;