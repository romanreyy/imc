import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DropDownMenu () {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="dropdown">
            <img  alt='button' onClick={toggleMenu} src="https://cdn.icon-icons.com/icons2/2091/PNG/512/menu_icon_128510.png" className="ImgMenu" />
            {isMenuOpen && (
                <div className="menu">
                    {/* Contenido del menú */}
                    <ul>
                        <h1> Sobre IMC </h1>
                        <li>
                            <Link to="/question1Imc" onClick={closeMenu}>
                                <div className='menu-section'>¿Como calcular el IMC?</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/question2Imc" onClick={closeMenu}>
                                <div className='menu-section'>Correcciones al indice por edad y sexo </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/question3Imc" onClick={closeMenu}>
                                <div className='menu-section'>No diferencias entre masa muscular y masa grasa </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/question4Imc" onClick={closeMenu}>
                                <div className='menu-section'>Escala </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/question5Imc" onClick={closeMenu}>
                                <div className='menu-section'>Variacion en relacion con la salud </div>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <h1>Calorias</h1>
                        <li>
                            <Link to="/question1Calories" onClick={closeMenu}>
                                <div className='CaloriesItem-1'>Definiciones</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/question2Calories" onClick={closeMenu}>
                                <div className='CaloriesItem-2'>Origen</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/question3Calories" onClick={closeMenu}>
                                <div>Metabolismo y calorías</div>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <h1>Sobre Nosotros</h1>
                        <li>
                            <a href='https://docs.google.com/document/d/14SwLcKHROPOeJct885DNgHc-jnmTrxYCRs8DPWQMpYM/edit' target='__blank' onClick={closeMenu}>
                                <div>Dia a dia del proyecto</div>
                            </a>
                        </li>
                        <li>
                            <a href='https://docs.google.com/document/d/1zH9ilFMGZRemxYPFSsEY1najwoYgPpwjrMvoVJAYXG0/edit' target='__blank' onClick={closeMenu}>
                                <div>One Pager</div>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}