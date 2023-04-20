import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/Locationcontext";
const useSaveTrack = () => {
    const { createTracks } = useContext(TrackContext);
    const { state, reset } = useContext(LocationContext);
    const saveTrack = async () => {
        console.log(state.name, state.locations);
        await createTracks(state.name, state.locations);
        reset();
    }
    return [saveTrack];
};
export default useSaveTrack;