import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tleTMwOCIsImEiOiJjbDhyZXl3c2kxa3htM3ZsaGZyY3k3aHRzIn0.di5u3_2cipOquID51gJozA';



// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"



// const containerStyle = {
//     width: "100%",
//     height: "400px",
// }



const Map = ({ location }) => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(location.lng);
    const [lat, setLat] = useState(location.lat);
    const [zoom, setZoom] = useState(10);

    const center = [lng, lat]
    const container = mapContainer.current
    const style = 'mapbox://styles/mapbox/streets-v11'



    useEffect(() => {
        if (map.current) {
            map.current = new mapboxgl.Map({ container, style, center, zoom });
        } // initialize map only once

    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });


    // const { isLoaded } = useJsApiLoader({
    //     id: "google-map-script",
    //     googleMapsApiKey: process.env.mapboxPlacesAPI_Token,
    // })

    // console.log("location.lat", location.lat)
    // console.log("location.lat", location.lat)

    // const [map, setMap] = React.useState(null)

    // console.log(location.lat)

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center)
    //     map.fitBounds(bounds)
    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    // const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

    // return isLoaded ? (

    //     <GoogleMap
    //         mapContainerStyle={ containerStyle }
    //         center={ center }
    //         zoom={ 10 }
    //         onLoad={ onLoad }
    //         onUnmount={ onUnmount }
    //     >
    //         <Marker
    //             position={ { lat: location.lat, lng: location.lng } } icon={ {
    //                 url: image, anchor: new google.maps.Point(5, 58),
    //             } }
    //         />
    //         <></>
    //     </GoogleMap>
    // ) : <></>

    return (
        <div>
            <div className="sidebar">
                Longitude: { lng } | Latitude: { lat } | Zoom: { zoom }
            </div>
            <div ref={ mapContainer } className="map-container" />
        </div>
    );
}

export default Map