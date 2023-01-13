import React, { Component } from 'react';

import Toggle from '../../components/Toggle/Toggle';

class ToggleView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Toggle text="Click to toggle" />
         );
    }
}
 
export default ToggleView;