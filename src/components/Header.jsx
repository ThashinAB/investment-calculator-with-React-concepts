import logoImg from '/investment-calculator-logo.png';

export default function Header() {

    return (
        <header id='header'> 
            <img src={logoImg} />
            <h1>Investment Calculator</h1>
        </header>

    )
}