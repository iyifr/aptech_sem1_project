import { css } from "../stitches.config"
import { Button } from "./components/Button"

export default function Layout() {

    const button = css({
        color: '$lime12',
        letterSpacing: 1.5,
        fontSize: '49px',
        '@md': {
            fontSize: 28
        }
    })

    const navStyles = css({
        py: 12,
        maxWidth: '82rem',
        mx: 'auto',
        flexCont: true,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        '@md': {
            py: 16,
            maxWidth: 'full',
            mx: 18,
        }
    })

    const base = css({
        background: '$lime3',
    })

    return (
        <div className={base()}>
            <nav className={navStyles()}>
                <h1 className={button()}>Kiddies</h1>

                <p className={css({ color: '$lime12', fontWeight: 'bold', cursor: 'pointer', '&:hover': { textDecoration: 'underline', textUnderlineOffset: 6 } })()}>Contact us</p>
            </nav>
        </div>

    )
}