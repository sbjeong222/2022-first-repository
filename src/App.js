import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        //영화 데이터 로딩!
        console.log("rendered");
        this.getMovies();
    }

    render() {
        console.log("rendering");
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
    }
}

export default App;
