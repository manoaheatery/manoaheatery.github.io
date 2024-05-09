import logo from './images/logo.png'
import Slogan from './components/Slogan'
import Information from './components/Information'
import Menu from './components/Menu'
import Story from './components/Story'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <div id="app">
      <Slogan />
      <ScrollToTopButton />
      <div id="main">
        <div id="top"></div>
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <Information />
        </div>
      </div>
      <Menu />
      <Story />
      <Footer />
    </div>
  )
}

export default App
