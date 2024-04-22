import React from 'react';

const ErrorPage = () => {

    return (
        <div className="padding-sides page-content">
            <div id="error-404">
                <h2>404</h2>
                <p id="oups">Oups! La page que<span class="responsive-break"><br/></span> vous demandez n'existe pas.</p>

                <a href="/" id="accueil">Retourner sur la page d'accueil</a>
            </div>
        </div>
    );
}

export default ErrorPage;