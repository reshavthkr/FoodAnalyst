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
            <p className="">{props.totalfat}</p>
            <p className="value">{props.totalfatper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Saturated Fat</p>
            <p className="">{props.sfat}</p>
            <p className="">{props.sfatper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Trans Fat</p>
            <p className="">{props.tfat}</p>
            <p className="">{props.tfatper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Cholesterol</p>
            <p className="">{props.Cholesterol}</p>
            <p className="">{props.Cholesterolper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Sodium </p>
            <p className="">{props.Sodium}</p>
            <p className="">{props.Sodiumper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Total Carbohydrate </p>
            <p className="">{props.Carbs}</p>
            <p className="">{props.Carbsper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Dietary Fiber</p>
            <p className="">{props.Dfiber}</p>
            <p className="">{props.Dfiberper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Total Sugars</p>
            <p className="">{props.Tsugar}</p>
            <p className="">{props.Tsugarper}%</p>
            </div>
            <div className ="displayinline hrNormal pl3">
            <p className="">Includes </p>
            <p className="">{props.includes} Added Sugars</p>
            <p className="">{props.includesper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Protein </p>
            <p className="">{props.Protein}</p>
            <p className="">{props.Proteinper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Vitamin D </p>
            <p className="">{props.VD}</p>
            <p className="">{props.VDper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Calcium </p>
            <p className="">{props.Calcium}</p>
            <p className="">{props.Calciumper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Iron  </p>
            <p className="">{props.Iron}</p>
            <p className="">{props.Ironper}%</p>
            </div>
            <div className ="displayinline hrNormal ">
            <p className="b">Potassium   </p>
            <p className="">{props.Potassium}</p>
            <p className="">{props.Potassiumper}%</p>
            </div>
            <p>*Percent Daily Values are based on a 2000 calorie diet</p>
            </div>
        </div>
    )
}

export default NutriChart
