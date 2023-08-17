import React, { Component } from 'react';
import Timeline from '../../components/Timeline/Timeline';
import Label from '../../components/Label/Label';
class TimelineView extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Label text="Activity"/>
            <Timeline/>
            </div>
        );
    }
}
 
export default TimelineView;