import { ReactNode } from 'react'

export interface PostsInterface {
    id: number
    title: string
    created_at: string
    body: string
}

export interface UserPropsInterface {
    name: string
    bio: string
    username: string
    url: string
    company: string
    followers: number
    avatar: string
}

export interface GithubContextInterface {
    posts: PostsInterface[]
    userInfo: UserPropsInterface
}

export interface GithubProviderInterface {
    children: ReactNode
}
