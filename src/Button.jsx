import './Button.css'

export default function Button({link}) {
    return (
        <a href={link}>
            <button>Acessar</button>
        </a>
    )
}