import { useContext, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { ArrowSquareOut, Buildings, Users } from 'phosphor-react'

import { CardInfo, CardInfoGithub } from '../../styles/global'
import { ContainerContent, ContainerPosts, Post } from './styles'
import { GithubContext } from '../../contexts/GithubContext'
import githubLogo from '../../assets/images/github.svg'
import { PostsInterface } from '../../interfaces/Github'

const CustomLinkRenderer = () => {
    return null;
};

export function Home() {
    const { posts, userInfo } = useContext(GithubContext)
    const [filteredPosts, setFilteredPosts] = useState<PostsInterface[]>([])

    useEffect(() => {
        setFilteredPosts(posts);
    }, [])

    const handleFilteredPosts = (text: string) => {
        const postsFilter = posts.filter((post) => post.title.toLowerCase().includes(text.toLowerCase()));

        setFilteredPosts(postsFilter);
    }

    return (
        <>
            {userInfo.name !== undefined && (
                <CardInfo type='center'>
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
                                <Buildings size={18} color='#3A536B' />
                                {userInfo.company}
                            </span>
                            <span>
                                <Users size={18} color='#3A536B' />
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
                <input onChange={(e) => handleFilteredPosts(e.target.value)} type="text" placeholder="Buscar conteúdo" />
                <ContainerPosts>
                    {filteredPosts.map((post) => {
                        return (
                            post.body !== null && (
                                <Post key={post.id} to={`/post/${post.id}`}>
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
                                        <Markdown components={{
                                            a: CustomLinkRenderer
                                        }}>{post.body}</Markdown>
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
