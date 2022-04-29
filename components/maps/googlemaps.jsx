import GoogleMapReact from 'google-map-react';
import style from './googlemaps.module.scss'

function Googlemaps() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <section className={style.googlemap}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBQaDdCv29xQgahdFsMMLgyRjlxIU9UNyg' }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33
                }}
                defaultZoom={10}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </section>
    )
}

export default Googlemaps