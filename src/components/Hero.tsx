import { css } from "../../stitches.config"
import { Button } from "./Button"
import ImageCarousel from "./ImageCarousel"

const HeroSection = () => {

    return <div className={hero()}>
        <section className={css({ flexCont: true, alignItems: 'center', flexDirection: 'column', gap: 12, width: '100%' })()}>
            <h2 className={text}>Simple and delightful lessons for kids</h2>
            <Button className={css({ mx: 'auto', marginTop: 22 })()} mode={"neutral"}>Start a lesson</Button>
        </section>
    </div>
}

export default HeroSection

// STYLES
const hero = css({
    flexCont: true,
    flexDirection: 'column',
    gap: 24,
    alignItems: 'center',
    maxWidth: '84rem',
    mx: 'auto',
    my: 44
})


const text = css({
    fontSize: 56,
    fontFamily: '"Coming Soon", apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    fontWeight: 200,
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    margin: '0 auto',
    letterSpacing: '.15em',
    textAlign: 'center',
    width: '60%',

    '@md': {
        fontSize: 34
    }
})()