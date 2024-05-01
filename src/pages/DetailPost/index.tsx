import { useParams } from 'react-router-dom'

export function DetailPost() {
    const { idPost } = useParams()

    return <h1>pagina de detalhe do post: {idPost}</h1>
}
