import React, { useState, useRef} from "react";

export default function CalculatorImc () {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);
    const [checked, setChecked] = useState(false);
    const resultRef = useRef(null);

    const handleChange = (position) => {
        setChecked(position);
    }
    const calculateImc = () => {
        if (age && height && weight) {
            const heightInMeters = height / 100;

            const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setResult(imc);
        } else {
            setResult(null);
        }

        window.scrollTo({
          top: resultRef.current.offsetTop,
          behavior: "smooth" 
        });
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
                                <input type="checkbox" checked={checked === 1} onChange={() => handleChange(1)} />
                            </div>
                        </div>
                        <div className="Famale">
                            <img alt='button' className="FamaleImg" src="https://assets.yazio.com/frontend/images/icons.svg#icon-female"/>
                            <div className="selectedFamale">
                                <input type="checkbox" checked={checked === 2} onChange={() => handleChange(2)} />
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
                <div className="resultIMC" ref={resultRef}>
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
                        <div>
                            <p className="description">
                                Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente. Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable. Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso. Si su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad.
                            </p>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
