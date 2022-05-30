import React, { useState } from "react";
import { StarIcon, RatingContainer, Radio, Rating } from "./rating.style";

interface RateProps {
    isAvaliable: boolean;
    note?: 0 | 1 | 2 | 3 | 4 | 5;
}

const Rate: React.FC<RateProps> = (props): JSX.Element => {
    const [rate, setRate] = useState(props.note || 0);

    return (
        <RatingContainer>
        {[...Array(5)].map((_,index) => {
            const givenRating = index + 1;
            return (
                <label key={index}>
                    {
                    //TODO: IMPROVE ALERT LAYOUT
                    props.isAvaliable && <Radio
                        type="radio"
                        value={givenRating}
                        onClick={() => {
                        setRate(givenRating);
                        alert(`Voce deseja avaliar o filme com ${givenRating} estrelas ?`);
                        }}/>
                    }
                    <Rating>
                    <StarIcon
                        note={ givenRating <= rate }
                    />
                    </Rating>
                </label>
            );
        })}
        </RatingContainer>
);
};

export default Rate;
