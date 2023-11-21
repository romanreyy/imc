import React, { useState} from "react";

export default function CalculatorImc () {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const handleCheckboxChange1 = () => {
        if (isChecked1 === true){
            setIsChecked1(true);
            setIsChecked2(false);
        }
    }

    const handleCheckboxChange2 = () => {
        if (isChecked2 === true) {
            setIsChecked1(false);
            setIsChecked2(true);
        }
    }
    
    const calculateImc = () => {
        if (age && height && weight) {
            const heightInMeters = height / 100;

            const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setResult(imc);
        } else {
            setResult(null);
        }
    }
    return (
        <section>
            <div className="calculator">
                <div className="titleCalculator">
                    <h1>¡CALCULE SU IMC AHORA!</h1>
                </div>
                <div className="calculatorDivAgeGender">
                    <h2 className="titleSections">¿Cuál es su género?</h2>
                    <div className="selectGender">
                        <div className="Male">
                            <img alt='boton' className="MaleImg" src="https://assets.yazio.com/frontend/images/icons.svg#icon-male"/>
                            <div className="selectedMale">
                                <input type="checkbox" id="male" name="gender" value="male"  value={isChecked1} onChange={handleCheckboxChange1}/>
                            </div>
                        </div>
                        <div className="Famale">
                            <img alt='button' className="FamaleImg" src="https://assets.yazio.com/frontend/images/icons.svg#icon-female"/>
                            <div className="selectedFamale">
                                <input type="checkbox" id="female" name="gender" value="female"  value={isChecked2} onChange={handleCheckboxChange2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculatorDivAgeGender">
                    <h2 className="titleSections">¿Cuántos años tienes? </h2>
                    <input
                        className="insertAge"
                        type='tel'
                        data-decimals="false"
                        placeholder="21"
                        maxLength="3"
                        pattern="[0-9]*"
                        value={age} onChange={(e) => setAge(e.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}/>
                    <label for="insertAge">
                        <span>Años</span>
                    </label>
                </div>
                <div className="calculatorDivWeightHeight">
                    <h2 className="titleSections">¿Cuanto mides?</h2>
                    <input
                        className="insertWeight"
                        type="tel"
                        data-decimals="false"
                        placeholder="170"
                        maxLength="3"
                        pattern="[0-9]*"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                    <label for="insertWeight">
                        <span>Cm</span>
                    </label>
                </div>
                <div className="calculatorDivWeightHeight">
                    <h2 className="titleSections">¿Cual es su peso?</h2>
                    <input
                        className="insertHeight"
                        type="tel"
                        data-decimals="false"
                        placeholder="71"
                        maxLength="3"
                        pattern="[0-9]*"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                    <label for="insertHeight">
                        <span>Kg</span>
                    </label>
                </div>
                <button className="buttonCalculate" onClick={calculateImc}>
                    Calcular IMC
                </button>
                <div>
                    {result && (
                        <div>
                            <h1 className="result">Tu resultado</h1>
                            <div className="imc">
                                <div>
                                    <div className="results">
                                        Tu imc personal
                                    </div>
                                    <div className="results">
                                        {result}
                                    </div>
                                </div>
                                <div>
                                    <div className="results">
                                        Tu peso actual
                                    </div>
                                    <div className="results">
                                        {weight} Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
