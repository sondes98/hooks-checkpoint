import {POSTERPATH_API, IMG_REPLACEMENT_API} from "../API"



const MovieCard = ({title, overview, poster_path, vote_average }) => {
    return(
        <div className="movie">

            <img src={poster_path ? POSTERPATH_API + poster_path : IMG_REPLACEMENT_API} alt={title}/>

            <div className="movie-info">
                <h3 className="movie-title">{title}</h3>
                <span className={"movie-vote " + voteClass(vote_average)}>{vote_average}</span>
            </div>

            <div className="movie-overview">
                <h3 className="movie-title">{title}</h3>
                <p>{overview}</p>
            </div>

        </div>
    )
}
const voteClass = (vote) => {
    if(vote >= 8)
        return "green"
    else if (vote >= 6)
        return "orange"
    else return "red"
}


export default MovieCard