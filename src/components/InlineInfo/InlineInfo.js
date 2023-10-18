import React, { Component } from 'react';
import classNames from "classnames";
import { Warning,Info } from '@phosphor-icons/react';
import './InlineInfo.scss'
class InlineInfo extends Component {
    state = {  } 
    render() { 
        return (
            <div 
            className={
                classNames('test',{
                "inlineInfoWarning": this.props.type==="warning",
                "inlineInfo": this.props.type==='info',
              })}
                >
                <div className='lhs'>
                    { this.props.type==="warning" ?
                <Warning size={20} color="#ffffff" weight="bold" />
                :
                <Info size={20} color="#ffffff" weight="bold" />
                }
                </div>
                <div className={
                    this.props.size==='large' ? 'large content warning':'content warning' }>
                    {this.props.title &&
                        <div><b>{this.props.title}</b></div>
                    }
                    Removing all MLS associations will significantly restrict listing related functionality. 
                </div>

            </div>
        );
    }
}
 
export default InlineInfo;