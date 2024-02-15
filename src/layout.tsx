import { Link } from "@tanstack/react-router"
import { css } from "../stitches.config"

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
        maxWidth: '84rem',
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

    const linkstyles = css({ flexCont: true, flexDirection: 'row', gap: 34, '@md': { display: 'none' } })()
    return (
        <div>
            <nav className={navStyles()}>

                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className={button()}>Kiddies</h1>
                </Link>

                <div className={linkstyles}>
                    <p className={css({ color: '$lime12', cursor: 'pointer', '&:hover': { textDecoration: 'underline', fontWeight: 'bold', textUnderlineOffset: 6 } })()}>Nursery Rhymes</p>
                    <p className={css({ color: '$lime12', cursor: 'pointer', '&:hover': { textDecoration: 'underline', fontWeight: 'bold', textUnderlineOffset: 6 } })()}>Math Lessons</p>
                    <p className={css({ color: '$lime12', cursor: 'pointer', '&:hover': { textDecoration: 'underline', textUnderlineOffset: 6, fontWeight: 'bold' } })()}>Quizzes</p>
                    <p className={css({ color: '$lime12', fontWeight: 'bold', cursor: 'pointer', '&:hover': { textDecoration: 'underline', textUnderlineOffset: 6 } })()}>Contact us</p>
                </div>
            </nav>
        </div>

    )
}