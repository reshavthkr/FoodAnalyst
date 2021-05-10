import React from 'react'
import './NutiChart.css'

function NutriChart(props) {
    return (
        <div className = " Border shadow-3 br3 ma3">
            <div>
            <div >
                <p className="Heading">Nutrition Facts</p>
            </div>
            <p className="amount">Amount Per Serving</p>
            <div className ="displayinline">
            <p className="calories">Calories</p>
            <p className="value">{props.calories}</p>
            </div>
            <hr/>
            <div className ="displayinline special">
            <p className="dailyPer">% Daily Value*</p>
            </div>
            <div className ="displayinline hrNormal">
            <p className="TotalFat b">Total Fat</p>
            <p className="value">{props.totalfat}</p>
            <p className="value">{props.totalfatper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Saturated Fat</p>
            <p className="value">{props.sfat}</p>
            <p className="value">{props.sfatper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Cholesterol</p>
            <p className="value">{props.Cholesterol}</p>
            <p className="value">{props.Cholesterolper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Sodium </p>
            <p className="value">{props.Sodium}</p>
            <p className="value">{props.Sodiumper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Total Carbohydrate </p>
            <p className="value">{props.Carbs}</p>
            <p className="value">{props.Carbsper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Dietary Fiber</p>
            <p className="value">{props.Dfiber}</p>
            <p className="value">{props.Dfiberper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Total Sugars</p>
            <p className="value">{props.Tsugar}</p>
            <p className="value">{props.Tsugarper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Protein </p>
            <p className="value">{props.Protein}</p>
            <p className="value">{props.Proteinper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Vitamin D </p>
            <p className="value">{props.VD}</p>
            <p className="value">{props.VDper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Calcium </p>
            <p className="value">{props.Calcium}</p>
            <p className="value">{props.Calciumper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Iron  </p>
            <p className="value">{props.Iron}</p>
            <p className="value">{props.Ironper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Potassium   </p>
            <p className="value">{props.Potassium}</p>
            <p className="value">{props.Potassiumper}%</p>
            </div>
            <p>*Percent Daily Values are based on a 2000 calorie diet</p>
            </div>
        </div>
    )
}

export default NutriChart
