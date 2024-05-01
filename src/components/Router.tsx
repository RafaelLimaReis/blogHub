import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { DetailPost } from '../pages/DetailPost'

export function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:idPost" element={<DetailPost />} />
                </Route>
            </Route>
        </Routes>
    )
}
