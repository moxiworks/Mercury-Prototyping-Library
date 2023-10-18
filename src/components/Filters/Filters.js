import { Component } from "react";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Radio from "../Radio/Radio"
import Button from "../Button/Button";
import Select from "../Select/Select"
import { Plus } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';
import './Filters.scss'

class Filters extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        filters:[
            {
                id:uuidv4()
            },
            {
                id:uuidv4()
            }
        ]
     }

     addFilter=()=>{
        console.log('dfdfddfd');
        const tempFilters = [...this.state.filters]
        tempFilters.push(
            {
                id:uuidv4()
            }
        )
        this.setState({
            filters:tempFilters
        })
     }

     deleteFilter=(id)=>{
        let tempFilters = [...this.state.filters]
        tempFilters = tempFilters.filter(e=>e.id!==id)
        this.setState({
            filters:tempFilters
        })
     }

    content=()=>{
        return(
            <div className="filterContent">

                <div className="matching">
                    <div className="lhs">
                        <Label text="Match"/>
                        <Radio optionOne="All of these" optionTwo="Any of these"/>
                    </div>
                    <div className="rhs">
                        <Button type="text" text="+ Add Filter" onClick={()=>this.addFilter()}/>
                    </div>
                </div>
              
                <div className="filterList">
                        {this.state.filters.map(filter=>{
                            return(
                                <div key={filter.id} className="currentFilters">
                                    <Select text="Select new filter" label="Filter" placeholder="dfdfd"/>
                                    <Select text="Select Condition" label="Condition"/>
                                    <Select text="Include" label="Rule"/>
                                    <button className="deleteBtn" onClick={()=>this.deleteFilter(filter.id)}><Plus size={16} color="#597897" weight="bold"/></button>
                                </div>
                            )
                        })}
                </div>
              

            </div>
        )
    }


    render() { 
        return (
            <div>
                <div className="filters">
                   <Modal
                   content={this.content()}
                   heading="Filters"
                   subTitle="Find what you are looking for by narrowing your results"
                   mainButtonText="Apply"
                   cancelButton
                   />
                </div>
            </div>
          );
    }
}
 
export default Filters;