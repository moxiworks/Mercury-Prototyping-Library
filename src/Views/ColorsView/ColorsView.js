import React, { Component } from 'react';
import ColorSwatch from '../../components/ColorSwatch/ColorSwatch';
import Banner from '../../components/Banner/Banner';
import { v4 as uuidv4 } from 'uuid';
import './ColorsView.scss'
class ColorsView extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
      }

    state = { 
        copiedColor: '',
        colors:[
            [
                {
                    name: 'Primary',
                    color: '#0073E6'
                },
                {
                    name: 'Primary: Light',
                    color: '#6BC4FF'
                },
                {
                    name: 'Primary: Hover',
                    color: '#4096EC'
                },
                {
                    name: 'Primary: Dark',
                    color: '#003B76'
                },
                {
                    name: 'Primary: Darkest',
                    color: '#14143A'
                }
            ],
            [
                {
                name: 'Secondary',
                color: '#597897'
                },
                {
                    name: 'Secondary: Light',
                    color: '#DFE5E8',
                    secondaryColor: '#597897'
                },
                {
                    name: 'Secondary: Ultra Light',
                    color: '#F3F5F6',
                    secondaryColor: '#597897',
                    border: '#597897'
                },
                {
                    name: 'Secondary: Medium',
                    color: '#9BB2C9'
                }
            ],
            [
                {
                name: 'Tertiary',
                    color: '#9C5AF2'
                },
                {
                    name: 'Tertiary: Light',
                    color: '#CE82FF'
                },
                {
                    name: 'Tertiary: Dark',
                    color: '#653496'
                }
            ],
            [
                {
                name: 'Error',
                color: '#FF4330'
                },
                {
                    name: 'Error:Hover',
                    color: '#FF7A70'
                }
            ],
            [
                {
                name: 'Warning',
                color: '#FE6300'
                },
                {
                    name: 'Warning: Hover',
                    color: '#FF9246'
                }
            ],
            [
                {
                name: 'Success',
                color: '#19A388'
                },
                {
                    name: 'Success: Hover',
                    color: '#1FCDAB'
                }
            ]
            
        ]
     } 

     showBanner=(color)=>{
        this.setState({
            copiedColor: color
        })
        this.child.current.show()
     }
    render() { 
        return (
            <div className='colorViews'>
                <div className='titleArea'>
                <h1>Colors</h1>
                <small className='h3'>Click on a swatch to copy color to clipboard</small>
                </div>

             
            <div className='colorGroup'>
                {this.state.colors.map((group,index)=>{
                    return(
                        <div className='colorSwatchesLayout' key={uuidv4()}>
                        {group.map((color,index)=>{
                            return(
                                <div className='colorInfo' key={uuidv4()}>
                                    <div className='colorName'>{color.name}</div>
                                    <ColorSwatch color={color.color} secondaryColor={color.secondaryColor} border={color.border} callback={(color)=>this.showBanner(color)}/>
                                </div>
                            )
                        })}
                    </div>
                    )
                })}
            </div>

            <Banner text={"Color Copied: #" + this.state.copiedColor} ref={this.child} type="success"/>
            </div>
        );
    }
}
 
export default ColorsView;