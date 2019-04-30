import React from 'react';
import './RadioButton.css';

export class RegionList extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          selectedRegion: 'Karlovy Vary Region',
          selectedDistrict: 'Cheb',
          regionDistrictList: {
              'Karlovy Vary Region': ['Cheb','Karlovy vary','Sokolov'],
              'Central Bohemian Region': ['Benešov','Beroun','Kladno','Kolín','Kutná Hora','Mělník','Mladá Boleslav','Nymburk','Praha-východ','Praha-západ','Příbram','Rakovník'],
              'Hradec Králové Region': ['Hradec Králové','Jičín','Náchod','Rychnov nad Kněžnou','Trutnov'],
              'Liberec Region':['Česká Lípa','Jablonec nad Nisou','Liberec','Semily'],
              'Moravian-Silesian Region': ['Bruntál','Frýdek-Místek','Karviná','Nový Jičín','Opava','Ostrava'],
              'Olomouc Region': ['Jeseník','Olomouc','Přerov','Prostějov','Šumperk'],
              'Pardubice Region': ['Chrudim','Pardubice','Svitavy','Ústí nad Orlicí'],
              'Plzeň Region': ['Domažlice','Klatovy','Plzeň','Plzeň-South','Plzeň-North','Rokycany','Tachov'],
              'Prague': ['Prague'],
              'South Bohemian Region': ['České Budějovice', 'Český Krumlov','Jindřichův Hradec','Písek','Prachatice','Strakonice','Tábor'],
              'South Moravian Region': ['Blansko','Břeclav ','Brno','Brno-Country','Hodonín','Vyškov ','Znojmo '],
              'Ústí nad Labem Region': ['Chomutov','Děčín','Litoměřice','Louny','Most','Teplice','Ústí nad Labem'],
              'Vysočina Region': ['Havlíčkův Brod','Jihlava','Pelhřimov','Třebíč','Žďár nad Sázavou'],
              'Zlín Region': ['Kroměříž','Uherské Hradiště','Vsetín','Zlín']
          },
          
          lastSelectedDistrict: {
              'Karlovy Vary Region': 'Cheb',
              'Central Bohemian Region': 'Benešov',
              'Hradec Králové Region': 'Hradec Králové',
              'Liberec Region': 'Česká Lípa',
              'Moravian-Silesian Region': 'Bruntál',
              'Olomouc Region': 'Jeseník',
              'Pardubice Region': 'Chrudim',
              'Plzeň Region': 'Domažlice',
              'Prague': 'Prague',
              'South Bohemian Region': 'České Budějovice',
              'South Moravian Region': 'Blansko',
              'Ústí nad Labem Region': 'Chomutov',
              'Vysočina Region': 'Havlíčkův Brod',
              'Zlín Region': 'Kroměříž'
          }
      };

      this.onRegionChanged = this.onRegionChanged.bind(this);
      this.onDistrictChanged = this.onDistrictChanged.bind(this);
  }

  onRegionChanged(e){

    let lastSelectedDistrictCopy = this.state.lastSelectedDistrict;
    lastSelectedDistrictCopy[this.state.selectedRegion] = this.state.selectedDistrict;

    this.setState({
      selectedRegion: e.currentTarget.value,
      selectedDistrict: lastSelectedDistrictCopy[e.currentTarget.value],
      lastSelectedDistrict: lastSelectedDistrictCopy
    });
  }

  onDistrictChanged(e) {
    this.setState({
       selectedDistrict: e.currentTarget.value
    });
  }


  render() {
    const regionList = ['Karlovy Vary Region','Central Bohemian Region','Hradec Králové Region','Liberec Region','Moravian-Silesian Region','Olomouc Region','Pardubice Region','Plzeň Region','Prague','South Bohemian Region','South Moravian Region','Ústí nad Labem Region','Vysočina Region','Zlín Region'];

    const regions = regionList.map(region=>{
        return(
            <div className="item">
                <label className="radioContainer" >
                    <input type="radio" name="regionradio" value={region} checked={this.state.selectedRegion == region} onChange={this.onRegionChanged} />
                    <span className="circle"></span>
                    {region}
                </label>
            </div>
        );
    });
    
    const districtList = this.state.regionDistrictList[this.state.selectedRegion];
    const districts = districtList.map(district=>{
        return(
            <div className="item">
                <label className="radioContainer" >
                <input type="radio" name="districtradio" value={district} checked={this.state.selectedDistrict == district} onChange={this.onDistrictChanged} />
                <span className="circle"></span>
                {district}
                </label>
            </div>
            
        );
    });


        return  <div className='container'>
                   <div className="row"><div className="itemList">{regions}</div></div> 
                   <div className="row"><h2>vyberte okres</h2></div> 
                   <div className="row"><div className='itemList'>{districts}</div></div>
                </div>;
   }
}
