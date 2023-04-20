import { useState, useEffect } from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
const useLocation = (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestForegroundPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    //timeInterval in ms
                    timeInterval: 200,
                    distanceInterval: 5,
                },
                    callback
                );
            } catch (e) {
                setErr(e);
            }
        };
        if (shouldTrack) {
            startWatching();
        }
        else {
            if (subscriber) {
                subscriber.remove();
                subscriber = null;
            }
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);
    return [err];
};
export default useLocation;