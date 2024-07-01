import menu from '../images/menu.jpg'

const cvFileUrl =
    'https://drive.google.com/file/d/13SGae8rV7YRptyAV388S1yVE8m2brQgO/view'
const cvFileName = 'Menu_A4_2406_FINAL.pdf'

const Menu = () => {
  const downloadPDF = (url: string) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', cvFileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div id="menu">
      <img src={menu} className="menu-image" alt="menu" />
      <div className="menu-box">
        <p className="menu-text">
          <span className="menu-logo">manoah</span>,
          we proudly present to you our premium quality katsu. From making our
          own breadcrumbs to adding the final touches, we put care into every
          dish for an excellent and a memorable dining experience.
        </p>
        <button
          className="download"
          onClick={() => {
            downloadPDF(cvFileUrl)
          }}
        >
          <span className="underline-text">MENU</span>
        </button>
      </div>
    </div>
  )
}

export default Menu
