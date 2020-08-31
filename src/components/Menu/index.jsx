import React from 'react'
import './menu.css'

function Menu() {
    return (
        <div className="Title">
            <h1>Olá, sou Matheus.</h1>
            <h2>Estudante de Sistemas de Informação, front-end developer.</h2>
            <p>
                5.º período de Sistemas de informação pela UNINASSAU e graduado em Ciências Contábeis pela Faculdade Santa Helena.
                Sou apaixonado por tecnologia e a contabilidade foi o pontapé para conseguir arrecadar fundos e investir na minha carreira em tecnologia que é meu principal objetivo. Alguns dos meus conhecimentos: Java, HTML, CSS, JavaScript, TypeScript, SQL, MongoDB, React, VueJS, Angular.
            </p>

            <div className="middle">
                <a href="mailto:matheusaf.pimentel@gmail.com" className="btn btn4">Contacte-me</a>
            </div>
        </div>
    )
}

export default Menu