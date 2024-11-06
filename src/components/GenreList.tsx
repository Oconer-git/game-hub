import useGenres from '../hooks/useGenres';

const GenreList = () => {
    // const {genres, error, isLoading} = UseGenres();
    const {data} = useGenres();

    return (
       <ul>
            {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
       </ul>
    )
}

export default GenreList
