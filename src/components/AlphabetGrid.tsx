import { useState } from "react"
import { css, styled } from "../../stitches.config"

const AlphabetGrid = () => {
    const [isUpperCase, setIsUpperCase] = useState(true)

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const alphabetCharacters = isUpperCase ? alphabet.split('') : alphabet.toLocaleLowerCase().split('')

    const handleToggle = () => {
        setIsUpperCase((isUpperCase) => !isUpperCase)
    }

    return <>
        <span style={{ marginTop: 24, display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 12 }}>
            <p>lower case letters</p>
            <input type="checkbox" style={{ marginBlock: 5 }} onChange={(e) => handleToggle()} />
        </span>

        <section className={gridStyles}>
            {
                alphabetCharacters.map((item) => (
                    <GridItem> {item} </GridItem>
                ))
            }
        </section>
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

const GridItem = styled("div", {
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


export default AlphabetGrid