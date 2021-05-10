import React, { Component } from 'react'
import Form from "./Form/Form"
import "./ShowData.css"
import NutriChart from './NutriChart/NutriChart'


class ShowData extends Component {
    constructor(){
        super();
        this.state={
            enteredData : "",
            isLoaded : false,

            calories :'-',
            totalfat : '-',totalfatper:'-',
                sfat:"-", sfatper :'-',
                tfat:"-", tfatper:'-',
            Cholesterol:'-', Cholesterolper:'-',
            Sodium:'-',Sodiumper:'-',
            Carbs:"-",Carbsper:'-',
                Dfiber:'-',Dfiberper:'-',
                Tsugar:'-',Tsugarper:'-',
                includes:'-',includesper:'-',
            Protein:"-", Proteinper:"-",
            VD:'1',VDper:'1',
            Calcium:'1', Calciumper:'1',
            Iron:'1', Ironper:'1', 
            Potassium:'1',Potassiumper:'1'
        }
    }
    onInputChange = (event) => {
        this.setState({enteredData:event.target.value});
      }
      
    analyse = () =>{
        let string = this.state.enteredData.replace(/ /g, '%20');
        fetch(`https://api.edamam.com/api/nutrition-data?app_id=b282b5ee&app_key=5461169c3679f8c9604c5320f414d3ed&ingr=${string}`)
        .then(res =>res.json())
        .then(json =>{
            console.log(json)
            this.setState({
                isLoaded : true,
                calories : json.calories,
                totalfat :json.totalNutrients.FAT.quantity.toFixed(2) +" "+ json.totalNutrients.FAT.unit,
                totalfatper: json.totalDaily.FAT.quantity.toFixed(2),
                sfat: json.totalNutrients.FASAT.quantity.toFixed(2) + " "+ json.totalNutrients.FASAT.unit,
                sfatper: json.totalDaily.FASAT.quantity.toFixed(2),
                // tfat: (json.totalNutrients.FAMS.quantity + json.totalNutrients.FAPU.quantity).toFixed(2) + " " + json.totalNutrients.FAMS.unit
                Cholesterol:json.totalNutrients.CHOLE.quantity.toFixed(2) + " " + json.totalNutrients.CHOLE.unit,
                Cholesterolper: json.totalDaily.CHOLE.quantity.toFixed(2),
                Sodium:json.totalNutrients.NA.quantity.toFixed(2) + "" + json.totalNutrients.NA.unit,
                Sodiumper:json.totalDaily.NA.quantity.toFixed(2),
                Carbs : json.totalNutrients.CHOCDF.quantity.toFixed(2)+""+json.totalNutrients.CHOCDF.unit,
                Carbsper:json.totalDaily.CHOCDF.quantity.toFixed(2),
                    Dfiber:json.totalNutrients.FIBTG.quantity.toFixed(2)+""+json.totalNutrients.FIBTG.unit,
                    Dfiberper:json.totalDaily.FIBTG.quantity.toFixed(2),
                    Tsugar: json.totalNutrients.SUGAR.quantity.toFixed(2)+""+json.totalNutrients.SUGAR.unit,
                Protein : json.totalNutrients.PROCNT.quantity.toFixed(2)+""+ json.totalNutrients.PROCNT.unit,
                Proteinper : json.totalDaily.PROCNT.quantity.toFixed(2),
                VD : json.totalNutrients.VITD.quantity.toFixed(2)+""+ json.totalNutrients.VITD.unit,
                VDper : json.totalDaily.VITD.quantity.toFixed(2),
                Calciumper: json.totalDaily.CA.quantity.toFixed(2),
                Calcium: json.totalNutrients.CA.quantity.toFixed(2) + "" +json.totalNutrients.CA.unit,
                Ironper: json.totalDaily.FE.quantity.toFixed(2),
                Iron: json.totalNutrients.FE.quantity.toFixed(2)+""+json.totalNutrients.FE.unit,
                Potassiumper: json.totalDaily.K.quantity.toFixed(2),
                Potassium: json.totalNutrients.K.quantity.toFixed(2)+""+json.totalNutrients.K.unit,
            })
            
        });
    }
    render(){
        return (
            <div>
                <div className="Border ma4 br3 bg-white">
                    <Form ana ={this.analyse} inputchange = {this.onInputChange}/>
                    <NutriChart 
                    calories = {this.state.calories} 
                    totalfat={this.state.totalfat} totalfatper ={this.state.totalfatper}
                        sfat={this.state.sfat} sfatper ={this.state.sfatper}
                        tfat={this.state.tfat} tfatper ={this.state.tfatper}
                    Cholesterol = {this.state.Cholesterol} Cholesterolper = {this.state.Cholesterolper}
                    Sodium={this.state.Sodium} Sodiumper={this.state.Sodiumper}
                    Carbs ={this.state.Carbs} Carbsper={this.state.Carbsper}
                    Dfiber={this.state.Dfiber} Dfiberper={this.state.Dfiberper}
                    Tsugar={this.state.Tsugar} Tsugarper={this.state.Tsugarper}
                    includes={this.state.includes} includesper={this.state.includesper}
                    Protein={this.state.Protein} Proteinper={this.state.Proteinper}
                    VD ={this.state.VD} VDper ={this.state.VDper}
                    Calcium ={this.state.Calcium} Calciumper ={this.state.Calciumper}
                    Ironper={this.state.Ironper} Iron={this.state.Iron}
                    Potassiumper={this.state.Potassiumper} Potassium={this.state.Potassium}
                    />
                </div>
            </div>
        )
    }
    
}

export default ShowData
