import { createContext, useCallback, useEffect, useState } from 'react'

import { api } from '../lib/axios'
import {
    GithubContextInterface,
    GithubProviderInterface,
    PostsInterface,
    UserPropsInterface,
} from '../interfaces/Github'

export const GithubContext = createContext({} as GithubContextInterface)

export function GithubProvider({ children }: GithubProviderInterface) {
    const [posts, setPosts] = useState<PostsInterface[]>([])
    const [userInfo, setUserInfo] = useState<UserPropsInterface>({} as UserPropsInterface)

    const getPosts = useCallback(async (query: string = '') => {
        const responsePosts = await api.get(
            `/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
        )
        setPosts([...responsePosts.data.items])
    }, [])

    const getUserInfo = useCallback(async () => {
        const {
            // eslint-disable-next-line camelcase
            data: { name, bio, login, html_url, company, followers, avatar_url },
        } = await api.get('/users/RafaelLimaReis')

        setUserInfo({
            name,
            bio,
            username: login,
            // eslint-disable-next-line camelcase
            url: html_url,
            company,
            followers,
            // eslint-disable-next-line camelcase
            avatar: avatar_url,
        })
    }, [])

    useEffect(() => {
        getUserInfo()
        getPosts()
    }, [getPosts, getUserInfo])

    return <GithubContext.Provider value={{ posts, userInfo }}>{children}</GithubContext.Provider>
}
