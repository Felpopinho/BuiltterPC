import { fotoPerfil } from "./script";

export function Menu(){

    return(<>
        <div className="nav_container">
            <h1>BuillterPC</h1>

            <div className="conta_container">
                <img src={fotoPerfil} />
            </div>
        </div>

        <div className="menu_container">

            <div className="menu_esquerdo_container">

                <h1>Conheça a BuiltterPC</h1>
                <p>diversas funcionalidades disponiveis para facilitar suas experiências com hardware!</p>

                <div>
                    <button className="btn_create">Criar conta</button>
                    <button className="btn_enter">Fazer login</button>
                </div>

            </div>

            <div className="menu_direito_container">

            </div>

        </div>
    </>

    )
}