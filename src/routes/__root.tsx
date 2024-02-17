import { createRootRoute, Outlet } from '@tanstack/react-router'
import { css } from '../../stitches.config'
import Layout from '../layout'

const appBg = css({
    minHeight: '100vh',
    background: '$olive3'
})

export const Route = createRootRoute({
    component: () => (
        <div className={appBg()}>
            <Layout>
                <Outlet />
            </Layout>
        </div>
    ),
})