import { useParams } from 'react-router-dom'
import { CardInfo, CardInfoGithub } from '../../styles/global'
import { GithubContext } from '../../contexts/GithubContext'
import { useContext } from 'react'
import githubLogo from '../../assets/images/github.svg'
import { Calendar, ChatCircle } from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ContainerContent } from '../Home/styles'
import { MarkdownContainer } from './styles'

export function DetailPost() {
    const { idPost } = useParams()
    const parsedIdPost = idPost ? parseInt(idPost, 10) : null;

    const { posts } = useContext(GithubContext)

    const post = posts.find(post => post.id === parsedIdPost);

    return (
        <ContainerContent>
            <CardInfo type='start'>
                <h3>{post?.title}</h3>
                <CardInfoGithub>
                    <span>
                        <img src={githubLogo} alt="logo da plataforma github" />
                        {post?.user.login}
                    </span>
                    <span>
                        <Calendar size={18} color='#3A536B' />
                        {post?.created_at && formatDistanceToNow(new Date(post.created_at), { addSuffix: true, locale: ptBR })}
                    </span>
                    {post?.comments && post?.comments > 1 ? (
                        <span>
                            <ChatCircle size={18} color='#3A536B' />
                            {post.comments} {post.comments > 1 ? 'Comentários' : 'Comentário'}
                        </span>
                    ) : (
                        <span>
                            <ChatCircle size={18} color='#3A536B' />
                            Não há comentários
                        </span>
                    )}
                </CardInfoGithub>
            </CardInfo>
            <div style={{ padding: '40px 32px' }}>
            <MarkdownContainer>{post?.body}</MarkdownContainer>
            </div>
        </ContainerContent>
    )
}
