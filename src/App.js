import React from "react";

function Food({ name, picture }) {
    return (
        <div>
            <h1>I like {name}</h1>;
            <img src={picture} alt="음식사진" />
        </div>
    );
}

const foodLike = [
    {
        name: "Kimchi",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi&f=1",
    },
    {
        name: "Samgyeopsal",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1",
    },
    {
        name: "Bibimbap",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2S8riFnNgOm55O3kZjZiDgHaFG%26pid%3DApi&f=1",
    },
    {
        name: "Dongasu",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UpDCozCT4DXb6y8AvIzGgAHaE6%26pid%3DApi&f=1",
    },
    {
        name: "Kimbap",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XiO-APPrmYLstQXFFJDGrgHaE-%26pid%3DApi&f=1",
    },
];

function App() {
    return (
        <div>
            {foodLike.map((dish) => (
                <Food name={dish.name} picture={dish.image} />
            ))}
        </div>
    );
}

export default App;
