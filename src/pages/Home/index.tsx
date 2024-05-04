import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { CardInfo } from '../../styles/global'
import { ArrowSquareOut, Buildings, Users } from 'phosphor-react'
import { CardInfoGithub } from './styles'

import githubLogo from '../../assets/images/github.svg'

interface UserPropsInterface {
    name: string
    bio: string
    username: string
    url: string
    company: string
    followers: number
    avatar: string
}

export function Home() {
    const [userInfo, setUserInfo] = useState<UserPropsInterface>({} as UserPropsInterface)
    const getUserInfo = useCallback(async () => {
        const {
            // eslint-disable-next-line camelcase
            data: { name, bio, login, url, company, followers, avatar_url },
        } = await api.get('/users/RafaelLimaReis')

        // eslint-disable-next-line camelcase
        setUserInfo({ name, bio, username: login, url, company, followers, avatar: avatar_url })
    }, [])

    useEffect(() => {
        getUserInfo()
    }, [getUserInfo])

    return (
        userInfo.name !== undefined && (
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
                        <a href={userInfo.url} style={{ display: 'flex', alignItems: 'center' }}>
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
        )
    )
}
