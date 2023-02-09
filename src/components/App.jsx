import MobileDisplay from './MobileDisplay'
import DesktopDisplay from './DesktopDisplay'

function App() {
  const fakeConditional = true
  const desktop = <DesktopDisplay />
  const mobile = <MobileDisplay />

  return fakeConditional ? desktop : mobile
}

export default App
