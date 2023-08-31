import { useEffect, useState } from "react"


import searchIcon from "../assets/search.svg"
import menuIcon from "../assets/menu.svg"
import logo from "../assets/devflix-banner.png"


import "./App.css"
import MovieCard from "../componentes/movieCard/movieCard";
import Footer from "../componentes/footer/footer";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const apiKey = "58c4d213";
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

    useEffect(() => {
        searchMovies("Batman");
     }, []);

     const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);

     }

     const handleKeyPress = (e) => {
        e.key === "Enter" && searchMovies(searchTerm)
     }
    

    return (
        

        <div id="app">
          
            <div className="logo">
                <img src={logo} alt="Logo devflix" />
            </div>
            <div className="menuSearch">
            <div className="menu">
            <img src={menuIcon} alt="Icone de menu" onClick={() => "" }/> 
            </div>
            <div className="search">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress}placeholder="Pesquise por filmes" />
                <img src={searchIcon} alt="Icone de pesquisa" onClick={() => searchMovies(searchTerm)}/>
            </div>
            </div>
        {movies?.length > 0 ? (
            <div className="container">
                {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie}/>))}
            </div>
        ): (
            <div className="empty">
                <h2>Nenhum filme encontrador😨</h2>
            </div>
        )}
        <Footer link={"https:github.com.br"}>Karol-ss</Footer>
        </div>
    )
};

export default App;