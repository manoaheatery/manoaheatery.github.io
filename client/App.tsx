import logo from './images/logo.png'
import Information from './components/Information'
import Menu from './components/Menu'
import Story from './components/Story'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'

function App() {
  return (
    <div id="app">
      <ScrollToTopButton />
      <div id="main">
        <div id="top"></div>
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <Menu />
      <Story />
      <Information />
      <Footer />
    </div>
  )
}

export default App
