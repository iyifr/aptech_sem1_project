import { css, styled } from "../../stitches.config"

const NumbersGrid = () => {

    const numbers = '0123456789'

    const numberGroup = numbers.split('')

    return <section className={gridStyles}>
        {
            numberGroup.map((item) => (
                <GridItem> {item} </GridItem>
            ))
        }
    </section>
}


const gridStyles = css({
    flexCont: true,
    flexDirection: 'row',
    gap: 16,
    my: 32,
    flexWrap: 'wrap',

    '@md': {
        gap: 6
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
    color: '$lime12'

})


export default NumbersGrid