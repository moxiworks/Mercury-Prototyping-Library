import React, { Component } from 'react';
import InlineInfo from '../../components/InlineInfo/InlineInfo';
import Label from '../../components/Label/Label';
class InlineInfoView extends Component {
    state = {  } 
    render() { 
        return (

            <div>

                <Label text="Warning - Large"/>
                <InlineInfo size="large" title="Warning!" type="warning"/>
                <Label text="Warning - Compact"/>
                <InlineInfo type="warning"/>

                <Label text="Info - Large"/>
                <InlineInfo type="info" size="large" title="Important!"/>
                <Label text="Info - Compact"/>
                <InlineInfo type="info"/>
            </div>
        );
    }
}
 
export default InlineInfoView;