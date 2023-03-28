import React, { Component } from 'react';
import './PropertyCard.scss'
import PropImage from '../../images/property.png'
import BedIcon from '../../images/bed.svg'
import ShowerIcon from '../../images/shower.svg'
import SizeIcon from '../../images/size.svg'
import MoreIcon from '../../images/more.svg'
import ProfileIcon from '../../images/profile.png'

class PropertyCard extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    state = { 
        show: true,
        focused:false,
            defaultList:[
                {
                    title: 'Item One',
                    value: 'Item One'
                },
                {
                    title: 'Item Two',
                    value: 'Item Two'
                },
                {
                    title: 'Item Three',
                    value: 'Item Three'
                },
                {
                    title: 'Item Four',
                    value: 'Item Four'
                }
            ]
     }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
          this.setState({
            focused:false,
            showMenu:false
          })
        }
      }
     showMenu=()=>{
        this.setState(({ focused,showMenu }) => ({ focused: !focused , showMenu: !showMenu}));
     }
    render() { 
        return ( 
            <div className='propCardWrapper' ref={this.wrapperRef}>

            <div className='cardWrap'>
                <div className='cardType'>Active</div>
                <div className='cardTop'>
                    <img src={PropImage} alt=''/>
                </div>

                <div className='cardBottom'>
                    <div className='cardDetailsTop'>
                        <div><b>MLS#:</b> 516324</div>
                        <div><b>Dom:</b> 549</div>
                    </div>

                    <div className='cardDetailsCenter'>
                        <div className='cardPrice'>$1,750,000</div>
                        <div className='cardAddress'>9917 Lake Washington Blvd NE A303, Bellevue, WA 98004</div>
                    </div>

                    <div className='cardDetailsBottom'>

                        <div className='bbcCards'>
                            <img src={BedIcon} alt=""/>
                            <div className='bbcText'>10</div>
                        </div>
                        <div className='bbcCards'>
                            <img src={ShowerIcon} alt=""/>
                            <div className='bbcText'>12</div>
                        </div>
                        <div className='bbcCards'>
                            <img src={SizeIcon} alt=""/>
                            <div className='bbcText'>9000</div>
                        </div>

                    </div>
                </div>

            </div>


            <div className='cardWrap cardWrapInfo'>
                <div className='cardType'>Active</div>
                
                <div className='cardInfo'>
                    <div className='lhs'>
                        <div className='profilePic'>
                            <img src={ProfileIcon} alt=""/>
                        </div>
                        <div className='profileName'>
                            <div className='name'>Julie Zhou</div>
                            <div className='listingType'>Listing</div>
                        </div>
                    </div>

                    <div className={this.state.focused? 'rhs rhsActive' : 'rhs'} onClick={()=>this.showMenu()}>
                        <img src={MoreIcon} alt=""/>
                    </div>

                    <div className='dropdownWrapper'>
                        <div className={this.state.showMenu ? 'dropdown dropdownOpen' : 'dropdown'}>
                                {this.props.listItems ?
                                    this.props.listItems.map((item,index)=>{
                                        return(
                                            <div key={"List"+index} className={this.state.text===item.value ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.showMenu()}>{item.title}</div>
                                        )
                                    })
                                :
                                    this.state.defaultList.map((item,index)=>{
                                        return(
                                            <div key={"List"+index} className={this.state.text===item.value ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.showMenu()}>{item.title}</div>
                                        )
                                    })
                                }

                        </div>
                    </div>

                </div>

                <div className='cardTop'>
                    <img src={PropImage} alt=''/>
                </div>

                <div className='cardBottom'>
                    <div className='cardDetailsTop'>
                        <div><b>MLS#:</b> 516324</div>
                        <div><b>Dom:</b> 549</div>
                    </div>

                    <div className='cardDetailsCenter'>
                        <div className='cardPrice'>$1,750,000</div>
                        <div className='cardAddress'>9917 Lake Washington Blvd NE A303, Bellevue, WA 98004</div>
                    </div>

                    <div className='cardDetailsBottom'>

                        <div className='bbcCards'>
                            <img src={BedIcon} alt=""/>
                            <div className='bbcText'>10</div>
                        </div>
                        <div className='bbcCards'>
                            <img src={ShowerIcon} alt=""/>
                            <div className='bbcText'>12</div>
                        </div>
                        <div className='bbcCards'>
                            <img src={SizeIcon} alt=""/>
                            <div className='bbcText'>9000</div>
                        </div>

                    </div>
                </div>

            </div>



            </div>
         );
    }
}
 
export default PropertyCard;