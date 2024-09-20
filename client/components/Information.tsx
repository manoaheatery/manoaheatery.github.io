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
        Monday
        <br />
        Lunch: 11:30am - 3:00pm <span>[Last Order 2:30pm]</span>
        <br />
        <br />
        Tuesday - Saturday
        <br />
        Lunch: 11:30am - 3:00pm <span>[Last Order 2:30pm]</span>
        <br />
        Dinner: 5:00pm - 8:30pm <span>[Last Order 8:00pm]</span>
        <br />
        <span>[Break 3:00pm - 5:00pm]</span>
      </p>

      <p className="information-hours">
        <br />
        CLOSED
        <br />
        Sunday & Public Holiday
      </p>

      <a href="https://www.instagram.com/manoaheatery/">
        <InstagramIcon />
      </a>
    </div>
  )
}

export default Information
