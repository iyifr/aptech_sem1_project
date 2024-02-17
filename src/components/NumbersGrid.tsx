import { Link } from "@tanstack/react-router"
import { css, styled } from "../../stitches.config"
import { Button } from "./Button"

const NumbersGrid = () => {
    const searchParams = new URLSearchParams(location.search)
    let rangeString = '0 - 9'

    if (searchParams.has("range")) {
        for (const value of searchParams.values()) {
            value !== '100-109' ? rangeString = value : rangeString = '100-100';
        }
    }

    const split = rangeString.split('-')

    const largerNumbersGroup = Array.from({ length: 101 }, (value, index) => index);
    const top = parseInt(split[0])
    const bottom = parseInt(split[1])

    return <>
        <h3 style={{ marginBlock: 12, fontWeight: 400 }}>Practice numbers : {split[0]} - {split[1]}</h3>
        <p style={{ color: 'gray' }}>Practice drawing the numbers in your notebook *</p>
        <section className={gridStyles}>

            {
                largerNumbersGroup.slice(top, bottom + 1).map((item) => (
                    <GridItem> {item} </GridItem>
                ))
            }
        </section>

        <span className={nextLessonBtn}>
            {
                parseInt(split[1]) + 1 > 100 ?
                    <Link to="/">
                        <Button>Finish lesson</Button>
                    </Link>

                    : <Link to="/numbers" search={{ range: `${top + 10}-${bottom + 10}` }}>
                        <Button>
                            Next lesson
                        </Button>
                    </Link>
            }
        </span>
    </>
}


const gridStyles = css({
    flexCont: true,
    flexDirection: 'row',
    gap: 16,
    my: 32,
    flexWrap: 'wrap',

    '@md': {
        columnGap: 24,
        rowGap: 18
    }
})()

export const GridItem = styled("div", {
    bg: '$lime4',
    borderRadius: 24,
    height: 140,
    width: 200,
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px - 20px, rgba(0, 0, 0, 0.3) 0px 30px 60px - 30px',
    verticalAlign: 'center',
    flexCont: true,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '$lime12',

    '@md': {
        height: 70,
        width: 100,
    }
})

const nextLessonBtn = css({ flexCont: true, alignItems: 'end', py: 24, paddingLeft: '68rem', '@md': { paddingLeft: '1rem' } })()


export default NumbersGrid