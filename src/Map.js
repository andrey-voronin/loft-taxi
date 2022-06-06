import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'

class Map extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }

    mapContainer = React.createRef()
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXZvcm9uaW4iLCJhIjoiY2wzazF2M3g2MG1odzNxbzcxdmhmb21nZSJ9.k0ufIp8R8mJf8mPTuAf6MA'
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [60.58333, 56.83333],
            zoom: 12
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <>
        <h2>Карта</h2>
        <div className="map-wrapper">
            <div className="map" ref={this.mapContainer} />
        </div>
        </>
    }
}

export default Map
