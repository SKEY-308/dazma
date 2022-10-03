import * as React from 'react'
import Map from 'react-map-gl';



const Mapss = ({ location }) => {

    console.log(location)

    const [viewState, setViewState] = React.useState({
        longitude: location.lng,
        latitude: location.lat,
        zoom: 10
    });

    return (
        <Map
            { ...viewState }
            onMove={ evt => setViewState(evt.viewState) }
            style={ { width: "100%", height: '400px' } }
            mapStyle="mapbox://styles/skey308/cl8rgjmrh00eg16pi06cklq5k"
            mapboxAccessToken={ process.env.mapboxAccessToken }
        >

        </Map>
    );
}

export default Mapss