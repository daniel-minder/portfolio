import { MySlider } from "./components/MySlider"

function App() {
  return (
    // Zastanówmy się czy font-light czy font-normal i czy tracking ma być taki globalny
    <div className="font-normal tracking-wide min-h-screen flex py-4 lg:py-8 xl:py-16 box-border">
      <MySlider />
    </div>
  )
}

export default App
