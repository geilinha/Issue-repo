
interface CardProps {
    numero: number,
    descricao: string,
}

export function Card({numero, descricao}: CardProps) {
    return(<div>
        <strong>#{numero}</strong>
        <p>{descricao}</p>
    </div>
    )
}