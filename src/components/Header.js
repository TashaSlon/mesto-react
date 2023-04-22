import logo from '../images/logo.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="Логотип Место. Россия" />
        </header>
    );
};