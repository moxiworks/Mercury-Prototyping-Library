import React, { Component } from 'react';
import Tabs from '../../components/Tabs/Tabs'
import './TabsView.scss'

export default class TabsView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          
        }
        
    }
    componentDidMount() {
   
    }
 

    render() {
        return (
            <div className='tabWrapper'>
            <Tabs/>
            </div>
        )
    }
}