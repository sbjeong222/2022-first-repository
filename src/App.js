import React from "react";
import propTypes from "prop-types";

function Food({ name, picture, rating }) {
    return (
        <div>
            <h1>I like {name}</h1>
            <h2>{rating}/5</h2>
            <img src={picture} alt={name} />
        </div>
    );
}

const foodLike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi&f=1",
        rating: 5,
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1",
        rating: 4.9,
    },
    {
        id: 3,
        name: "Bibimbap",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2S8riFnNgOm55O3kZjZiDgHaFG%26pid%3DApi&f=1",
        rating: 4.8,
    },
    {
        id: 4,
        name: "Dongasu",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UpDCozCT4DXb6y8AvIzGgAHaE6%26pid%3DApi&f=1",
        rating: 4.7,
    },
    {
        id: 5,
        name: "Kimbap",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XiO-APPrmYLstQXFFJDGrgHaE-%26pid%3DApi&f=1",
        rating: 4.6,
    },
];

function App() {
    return (
        <div>
            {foodLike.map((dish) => (
                <Food
                    key={dish.id}
                    name={dish.name}
                    picture={dish.image}
                    rating={dish.rating}
                />
            ))}
        </div>
    );
}

Food.propTypes = {
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    rating: propTypes.number,
};
export default App;
