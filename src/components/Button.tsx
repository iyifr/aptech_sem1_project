import { styled } from "../../stitches.config";


const Button = styled('button', {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'semibold',
    maxWidth: 'auto',
    justifyContent: 'center',
    outline: 'none',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _hidden: {
        display: 'none',
    },
    fontSize: '16px',
    border: 'none',
    fontFamily: 'Quicksand Variable',

    variants: {
        mode: {
            default: {
                bg: '$lime10',
                width: 'auto',
                px: 24,
                fontWeight: 600,
                color: '$lime12',
                height: 44,
                '&:hover': {
                    bg: '$olive12',
                    color: '$lime10'
                },
            },
            neutral: {
                bg: '$olive12',
                width: 'auto',
                px: 24,
                fontWeight: 600,
                color: '$lime10',
                height: 44,
                '&:hover': {
                    bg: '$olive11',
                    color: '$lime10'
                },
            }
        },
        outlined: {
            true: {
                borderColor: '$lime5',
            }
        }
    },

    defaultVariants: {
        mode: 'default'
    }
})

export { Button }