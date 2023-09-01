import { Component } from "react";
import Filters from "../../components/Filters/Filters";
class FiltersView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <Filters/>
            </div>
          );
    }
}
 
export default FiltersView;