import { useContext } from 'react'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { ArrowSquareOut, Buildings, Users } from 'phosphor-react'

import { CardInfo } from '../../styles/global'
import { CardInfoGithub, ContainerContent, ContainerPosts, Post } from './styles'
import { GithubContext } from '../../contexts/GithubContext'
import githubLogo from '../../assets/images/github.svg'

export function Home() {
    const { posts, userInfo } = useContext(GithubContext)

    return (
        <>
            {userInfo.name !== undefined && (
                <CardInfo>
                    <img src={userInfo.avatar} alt="" />
                    <div style={{ flexGrow: 1 }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <h3>{userInfo.name}</h3>
                            <a
                                href={userInfo.url}
                                style={{ display: 'flex', alignItems: 'center' }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                github
                                <ArrowSquareOut size={16} />
                            </a>
                        </div>
                        <p title={userInfo.bio}>{userInfo.bio}</p>
                        <CardInfoGithub>
                            <span>
                                <img src={githubLogo} alt="logo da plataforma github" />
                                {userInfo.username}
                            </span>
                            <span>
                                <Buildings size={18} />
                                {userInfo.company}
                            </span>
                            <span>
                                <Users size={18} />
                                {userInfo.followers}{' '}
                                {userInfo.followers > 1 ? 'seguidores' : 'seguidor'}
                            </span>
                        </CardInfoGithub>
                    </div>
                </CardInfo>
            )}
            <ContainerContent>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '4.5rem',
                    }}
                >
                    <h3>Publicações</h3>
                    <small>
                        {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
                    </small>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
                <ContainerPosts>
                    {posts.map((post) => {
                        return (
                            post.body !== null && (
                                <Post key={post.id}>
                                    <div>
                                        <h4 title={post.title}>{post.title}</h4>
                                        <time>
                                            {formatDistanceToNow(new Date(post.created_at), {
                                                addSuffix: true,
                                                locale: ptBR,
                                            })}
                                        </time>
                                    </div>
                                    <span>
                                        <Markdown>{post.body}</Markdown>
                                    </span>
                                </Post>
                            )
                        )
                    })}
                </ContainerPosts>
            </ContainerContent>
        </>
    )
}
