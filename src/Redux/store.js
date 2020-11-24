import { createStore, combineReducers } from 'redux'
import Movies from '../Services/Movies'
import AddMovie from '../Screens/AddMovie'

const globalState = {
    movies: Movies,
    // movies_count: Movies.length
}

function global (state = globalState, action) {

    switch(action.type) {

        case 'ADD_MOVIE':
            let movie = state.movie
            movie.push(action.title )

            return { ...state, movies: movies }
            break

        case 'DELETE_MOVIE':
            console.log('DELETE_MOVIE')
            let movies = state.movies
            movies.splice(action.index, 1)
            console.log(movies)

            console.log({ ...state, movies: movies })

            return { ...state, movies: movies }
            break

        default:
            console.log('-----')
            return state
            break 

    }

}

const store = createStore(combineReducers({
    global: global
}))

export default store