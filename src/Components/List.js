import { Link } from "react-router-dom"

export default function List () {
    return (
        <div className="List">
            <Link to='/question1Imc'>
                <h3 className="Question1">¿Cómo calcular el IMC?</h3>
            </Link>

            <Link to='question2Imc'>
                <h3>Correcciones al índice por edad y sexo</h3>
            </Link>

            <Link to='question3Imc'>
                <h3>No diferencia entre masa muscular y masa grasa</h3>
            </Link>

            <Link to='question4Imc'>
                <h3>Escala</h3>
            </Link>

            <Link to='question5Imc'>
                <h3>Variación en relación con la salud</h3>
            </Link>

            <Link to='/question1Calories'>
                <h3>Definiciones</h3>
            </Link>

            <Link to='/question2Calories'>
                <h3>Origen</h3>
            </Link>

            <Link to='/question3Calories'>
                <h3>Metabolismo y calorías</h3>
            </Link>
        </div>
    );
}