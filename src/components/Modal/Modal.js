import React, { Component } from 'react';
import './Modal.scss'
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    state = { 
       
     }
     componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
          this.props.onClick()
        }
      }

    render() { 
        return ( 
            <div className='modalWrapper' >
                <div className='modalContent'  ref={this.wrapperRef}>
                    <CloseButton type="internal" onClick={()=>this.props.onClick()}/>
                    <h1>Modal Heading</h1>
                    <div className='modalText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac consectetur arcu. Quisque aliquet rutrum dignissim. Phasellus efficitur magna eget rhoncus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu ante, cursus non dolor non, sodales iaculis lorem. Maecenas a neque at sem interdum elementum non id lorem. Etiam non mattis ipsum, ut ullamcorper velit. In in tincidunt tortor. Aenean auctor eget sapien sed convallis. Nulla eget luctus augue. Suspendisse eros purus, consequat sit amet tempus et, tempor rhoncus orci. Cras consectetur id ante ut imperdiet. Sed nec mollis velit. Sed vehicula quis turpis at consectetur.
                    </div>
                    <div className='modalButtons'>
                        <Button text="Done" onClick={()=>this.props.onClick()}/>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Modal;