import story from '../images/story.jpg'

const Story = () => {
  return (
    <div id="story">
      <div className="story-top-line"></div>
      <div className="story-box">
        <span className="story1">
          Rest, <br />
          Culinary Excellence, <br />
          Community Connection
        </span>
        <br /> <br />
        <span className="story2">
          Manoah means &apos;to rest&apos;. Our name reflects the cozy space we
          provide within our community for everyone to enjoy and celebrate any
          occasion. <br />
          <br />
          Besides our famous katsu, we are well known for our innovative and
          modern cuisines, made from local ingredients sourced from trusted
          suppliers. <br />
          <br />
          Join us at manoah and explore the highest quality dishes that you
          won&apos;t experience elsewhere.
        </span>
      </div>
      <img src={story} className="story-image" alt="story" />
    </div>
  )
}

export default Story
