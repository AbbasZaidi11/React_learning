import React from "react";

function Emoji(props){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.symbol}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
         /* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div>*/
      
    )
}


export default Emoji;