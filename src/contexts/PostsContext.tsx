import { createContext } from 'react'
import { PostsContextInterface, PostsProviderInterface } from '../interfaces/Posts'

export const PostsContext = createContext({} as PostsContextInterface)

export function TransactionsProvider({ children }: PostsProviderInterface) {
    return <PostsContext.Provider value={{}}>{children}</PostsContext.Provider>
}
