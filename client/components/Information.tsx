import { InstagramIcon, MapIcon, PhoneIcon } from './Icon'

const Information = () => {
  return (
    <div id="information">
      <p className="information-title">Contact</p>
      <p className="information-contact">
        <a
          href="tel:02040829119"
          rel="noopener noreferrer"
          className="information-phone"
        >
          <PhoneIcon /> 020 40829119
        </a>
        <br />
        <a
          href="https://www.google.com/maps/search/?api=1&query=3/146+Sunnynook+Road"
          target="_blank"
          rel="noopener noreferrer"
          className="information-address"
        >
          <MapIcon /> 3/146 Sunnynook Road
        </a>
      </p>
      <p className="information-title">Opening Hours</p>
      <p className="information-hours">
        OPEN
        <br />
        Tuesday ~ Saturday <br />
        11:30am - 8:30pm (Break 3pm-5pm)
        <br />
        <span>[ Last Order 2:30pm ]</span>
      </p>
      <p className="information-hours">
        CLOSED <br />
        Monday, Sunday & Public Holiday
        <br />
        <span>[ Last Order 8:00pm ]</span>
      </p>
      <a href="https://www.instagram.com/manoaheatery/">
        <InstagramIcon />
      </a>
    </div>
  )
}

export default Information
