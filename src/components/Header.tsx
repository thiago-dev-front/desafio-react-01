import './Header.scss';
import Logo from '../assets/logo-todo.svg'

export function Header() {
    return (
        <header className="content">
            <img src={Logo} alt="Logo" className="content__img" />
        </header>
    )
}