import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
const Trackreducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default: return state;
    }
};
const fetchTracks = dispatch => {
    return async () => {
        const response = await trackerApi.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data });
    }
};
const createTracks = dispatch => {
    return async (name, locations) => {
        try {
            await trackerApi.post('/tracks', { name, locations });
        } catch (err) {
            console.log(err);
        }
    }
};
export const { Provider, Context } = createDataContext(
    Trackreducer,
    { fetchTracks, createTracks },
    []
)