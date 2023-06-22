import React from 'react';

const Comment = ({name ,comment,time,star}) => {
   // const {name ,comment,time,star} = props;
   // const name = props.name;

    return (
        <div className="comment">
            {/*  <a className="avatar" href="/">  */}
            <img alt="" src="" /> {/*src={faker.image.avatar()} resimleri random göstermek için yazdık fakat
                     hata aldığımdan dolayı resimleri göstermeyecğim hatayı bakıyorum daha tam çözemedim çözünce döneceğim*/}
            {/*  </a> */}
            <div className="content">
                <a className="author" href="/">{name}</a>
                <div className="metadata">
                    <div className="date">{time} time ago</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        {star} Star
                    </div>
                </div>
                <div className="text">
                    {comment}
                </div>
            </div>
        </div>
);
}
export default Comment;