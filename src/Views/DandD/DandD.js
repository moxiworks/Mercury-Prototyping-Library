import React, { Component } from 'react';
import Button from '../../components/Button/Button';
class DandD extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        elements:[]
     }

    create=(type)=>{
        this.setState({
            elements: [...this.state.elements,
                <Button/>
            ]
        })
    }
    showElement=(type)=>{
        return(
            <div>{type}</div>
        )
    }
    render() { 
        return ( 
            <div id="wrap">
                <button onClick={()=>this.create(Button)}>Button</button>
                {this.state.elements.map((elem, index)=>{
                    return(
                        this.showElement(elem)
                    )
                })}
            </div>
         );
    }
}
 
export default DandD;