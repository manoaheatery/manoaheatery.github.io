import logo from '../images/logo.png'
import Information from './Information'
import Menu from './Menu'
import Story from './Story'
import ScrollToTopButton from './ScrollToTopButton'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
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
