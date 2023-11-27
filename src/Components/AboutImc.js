export default function AboutImc () {
    return (
        <section>
            <div className="aboutImc">
                <div>
                    <h2 className='information'>¿Que es el IMC?</h2>
                    <p className="description">El IMC es un indice que calcula su peso ideal comparado con su peso actual tomando como datos el sexo, la edad, la altura y el peso. Puede variar segun la contextura fisica
                        de la persona. <br/>
                    </p>
                    <br/>
                    <p>
                            Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente. Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable. Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso. Si su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad.
                    </p>
                </div>
            </div>
        </section>
    );
}
