import BoxHeader from "../components/BoxHeader"
import FilmList from "../components/FilmList"
import Film from "../components/Film"
import BottomLink from "../components/BottomLink"
import { useState } from "react"
import "../App.css"

const Box = () => {

    const [films, setFilms] = useState (
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ]
    )






    return (
        <>
        <body>
            <BoxHeader/>
            <hr></hr>
            <FilmList films = {films}/>
            <Film/>
            <hr></hr>
            <BottomLink/>
        </body>
        </>
    )
}

export default Box