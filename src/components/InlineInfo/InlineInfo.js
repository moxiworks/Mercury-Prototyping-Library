import React, { Component } from 'react';
import classNames from "classnames";
import { Warning } from '@phosphor-icons/react';
import './InlineInfo.scss'
class InlineInfo extends Component {
    state = {  } 
    render() { 
        return (
            <div 
            className={classNames({
                "inlineInfoWarning": this.props.type==="warning",
                "inlineInfo": this.props.type==='info',
              })}
                >
                <div className='lhs'>
                <Warning size={20} color="#ffffff" weight="bold" />
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