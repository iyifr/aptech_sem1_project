import { DefaultThemeMap, createStitches } from '@stitches/react'
import { lime, blue, olive } from '@radix-ui/colors'

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
			...lime,
			...blue,
			...olive,
		},
	},
	media: {
		xs: '(max-width: 480px)',
		sm: '(max-width: 640px)',
		md: '(max-width: 768px)',
		lg: '(max-width: 1024px)',
		xl: '(max-width: 1280px)',
	},
	utils: {
		mx: (value: any) => ({
			marginLeft: value,
			marginRight: value,
		}),
		px: (value: any) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: any) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		my: (value: any) => ({
			marginTop: value,
			marginBottom: value,
		}),
		flexCont: (value: boolean) => ({
			display: value ? 'flex' : 'block',
		}),
		bg: (value: any) => ({
			backgroundColor: value,
		}),
	},
})


export const sx = (data: DefaultThemeMap) => css({...data})()
