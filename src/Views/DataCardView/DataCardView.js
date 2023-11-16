import React, { Component } from 'react';
import DataCard from '../../components/DataCard/DataCard';
import './DataCardView.scss'
class DataCardView extends Component {

    state = {  }
    render() { 
        return ( 
            <div className='dataCardList'>
                <DataCard 
                title="Marketing" 
                mainNumber="1024" 
                smallKey1="People" 
                smallValue1="n/a"
                smallKey2="Transactions"
                smallValue2="n/a"
                color="#FF9246"
                />
                 <DataCard 
                title="Prospects" 
                mainNumber="58" 
                smallKey1="People" 
                smallValue1="58"
                smallKey2="Transactions"
                smallValue2="127"
                color="#CE82FF"
                />
                 <DataCard 
                title="Actives" 
                mainNumber="25" 
                smallKey1="People" 
                smallValue1="25"
                smallKey2="Transactions"
                smallValue2="332"
                color="#6BC4FF"
                />
                 <DataCard 
                title="Pending" 
                mainNumber="13" 
                smallKey1="People" 
                smallValue1="13"
                smallKey2="Transactions"
                smallValue2="61"
                color="#1FCDAB"
                />
            </div>
        );
    }
}
 
export default DataCardView;