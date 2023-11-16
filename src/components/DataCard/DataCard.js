import React, { Component } from 'react';
import './DataCard.scss'
class DataCard extends Component {

    state = {
        mainCount: 0,
        maxCount: this.props.mainNumber,
        time: 200,
      };
    
      componentDidMount() {
        const { mainCount, maxCount, time } = this.state;
        const maxDifference = Math.abs(maxCount - mainCount);
        const increment = maxDifference / (time / 10);
    
        if (maxDifference > 0) {
          this.animateCounts(increment);
        }
      }
    
      animateCounts = (increment) => {
        const { mainCount, maxCount } = this.state;
        const diffMain = maxCount - mainCount;
        
        if (diffMain > 0) {
          this.setState((prevState) => ({
            mainCount: Math.min(prevState.mainCount + increment, maxCount),
          }));
        }
    
        if (diffMain < 0) {
          this.setState((prevState) => ({
            mainCount: Math.max(prevState.mainCount - increment, maxCount),
          }));
        }
    
        if (diffMain !== 0) {
          setTimeout(() => {
            this.animateCounts(increment);
          }, 10);
        }
      };
     
    render() { 
        const roundedMainCount = Math.round(this.state.mainCount);
        // const roundedMaxCount = Math.round(this.state.maxCount);
        return ( 
            <div className='dataCard'>

                <div className='dataCarTitle'>{this.props.title}</div>
                <div className={this.state.mainCount<this.state.maxCount ? 'dataCarNumber blurNumber':'dataCarNumber finished'}>{roundedMainCount}</div>

                <div className='dataCarSmall'>
                    <div><span className='dataCardSmallTitle'>{this.props.smallKey1}:</span> {this.props.smallValue1}</div>
                    <div><span className='dataCardSmallTitle'>{this.props.smallKey2}:</span> {this.props.smallValue2}</div>
                </div>
             
                <div className='dataCardColorbar' style={{backgroundColor:this.props.color, transform:`scaleX(`+this.state.mainCount/this.state.maxCount*100+'%)'}}></div>
            </div>
        );
    }
}
 
export default DataCard;