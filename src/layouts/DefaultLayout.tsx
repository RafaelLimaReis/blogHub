import { Outlet } from 'react-router-dom'

import { GithubProvider } from '../contexts/GithubContext'
import { Header } from '../components/Header'

export function DefaultLayout() {
    return (
        <>
            <Header />
            <GithubProvider>
                <Outlet />
            </GithubProvider>
        </>
    )
}
