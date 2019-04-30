import React from 'react';
import RegionList from './RegionList';
import './RadioButton.css';



export class DistrictList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDistrict: 'Cheb'
        };

        this.onDistrictChanged = this.onDistrictChanged.bind(this);
    }

    onDistrictChanged(e) {
        this.setState({
           selectedDistrict: e.currentTarget.value
        });
    }


    render(){

        const districtList = this.props.regionDistrictList[this.props.selectedRegion];
        const districts = districtList.map(district=>{
            return(
                <div>
                    <label className="radioContainer" >
                    <input type="radio" name="districtradio" value={district} checked={this.state.selectedDistrict == district} onChange={this.onDistrictChanged} />
                    <span className="circle"></span>
                    {district}<br />
                    </label>
                </div>
                
            );
        });

        return (<div>
                <h2>vyberte okres</h2>
                {districts}
                </div>
        );
    }
}
