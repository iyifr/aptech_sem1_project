import { useState } from "react"
import { css, keyframes } from "../../stitches.config"
import I1 from '../assets/Children1.jpg'
import I2 from '../assets/Children2.jpg'
import I3 from '../assets/Children3.jpg'
import I4 from '../assets/Children4.jpg'

const ImageCarousel = () => {
    const [prefersReducedMotion] = useState(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const sectionstyles = css({
        flexCont: true, display: 'row', gap: 18, my: 24,
        mx: 'auto',
        maxWidth: 1240,
        '&[data-animated="true"]': {
            overflow: 'hidden',
            mask: 'linear-gradient(90deg, transparent, #EFF1EF 10%, #EFF1EF, 90%, transparent)'
        },
    })()

    const scroll = keyframes({
        'to': {
            transform: 'translate(calc(-50% - 0.5rem))'
        }
    })

    const innerstyles = css({
        flexCont: true,
        gap: '1rem',
        paddingBlock: '1rem',
        flexWrap: 'wrap',
        '&[data-animated="true"]': {
            width: 'fit-content',
            flexWrap: 'nowrap',
            animation: `${scroll} 30s linear infinite`
        }
    })()

    const imageStyles = css({
        width: 220,
        height: 220, borderRadius: 12,
        objectFit: 'cover',
        objectPosition: 'center'
    })()


    const images = [I1, I2, I3, I4]

    return <section className={sectionstyles} data-animated={!prefersReducedMotion}>
        <section className={innerstyles} data-animated={!prefersReducedMotion}>
            {
                images.map((imageSrc) => (
                    <img src={imageSrc} className={imageStyles} />
                ))
            }
            {
                images.map((imageSrc) => (
                    <img src={imageSrc} className={imageStyles} aria-hidden="true" />
                ))
            }
        </section>

    </section>
}

export default ImageCarousel