import React, { Component } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
class PropertyCardView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <PropertyCard/>
         );
    }
}
 
export default PropertyCardView;