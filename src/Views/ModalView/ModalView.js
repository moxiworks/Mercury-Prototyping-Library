import React, { Component } from 'react';
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal';
class ModalView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        showModal: false
     }

    openModal=()=>{
        this.setState({
            showModal: true
        })
    }
    closeModal=()=>{
        this.setState({
            showModal: false
        })
    }
    render() { 
        return (
        <div>
            <Button text="Open Modal" onClick={()=>this.openModal()}/>
            {this.state.showModal ? 
            <Modal onClick={()=>this.closeModal()} 
            heading="Modal Heading"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac consectetur arcu. Quisque aliquet rutrum dignissim. Phasellus efficitur magna eget rhoncus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean arcu ante, cursus non dolor non, sodales iaculis lorem. Maecenas a neque at sem interdum elementum non id lorem. Etiam non mattis ipsum, ut ullamcorper velit. In in tincidunt tortor. Aenean auctor eget sapien sed convallis. Nulla eget luctus augue. Suspendisse eros purus, consequat sit amet tempus et, tempor rhoncus orci. Cras consectetur id ante ut imperdiet. Sed nec mollis velit. Sed vehicula quis turpis at consectetur.
            "
            />
            : null}
        </div>
         
        );
    }
}
 
export default ModalView;