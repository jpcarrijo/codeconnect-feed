import Logo from "./assets/logo.svg";
import Feed from "./assets/feed.svg";
import Profile from "./assets/account_circle.svg";
import About from "./assets/info.svg";
import Logout from "./assets/logout.svg";
import "./styles.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo da firma" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={Feed} alt="" />
              <span>Fedd</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Profile} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={About} alt="" />
              <span>Info</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Logout} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
