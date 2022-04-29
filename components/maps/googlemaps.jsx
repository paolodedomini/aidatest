import GoogleMapReact from 'google-map-react';
import style from './googlemaps.module.scss'
import { useState } from 'react'
import Image from 'next/image'

function Googlemaps() {
    const [mapVisible, setMapVisible] = useState(false)
    const MapMarker = ({ text }) => <div>{text}</div>;
    return (
        <>
            {!mapVisible ?
                <section onMouseOver={() => setMapVisible(true)}>
                    <div className={style.staticImageMap}>
                        <Image
                        src="/images/map-static.jpg"
                        width={1630}
                        height={600}
                        quality={85}
                        layout='intrinsic'
                        />
                    </div>
                </section> :

                <section className={style.googlemap}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBQaDdCv29xQgahdFsMMLgyRjlxIU9UNyg' }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                        defaultZoom={10}
                    >
                        <MapMarker
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </section>}
        </>
    )
}

export default Googlemaps