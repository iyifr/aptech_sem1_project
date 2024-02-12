import { css } from '../stitches.config.ts'

function App() {

  const button = css({
    color: '$lime12',
    background: '$lime3',
    letterSpacing: 1.5
  })

  const appBg = css({
    minHeight: '100vh',
    background: '$olive.2'
  })

  return (
    <div className={appBg()}>
      <h1 className={button()}>Kids.learnn</h1>
    </div>
  )
}

export default App
