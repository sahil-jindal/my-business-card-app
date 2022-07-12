import ProfilePic from "../images/ProfilePic.JPG";
import Mail from "../images/Mail.png";
import LinkedInLogo from "../images/linkedin.png";

export default function Profile() {
  return (
    <div>
      <img src={ProfilePic} alt="profile" className="profile--image" />
      <h3 className="profile--info">Laura Smith</h3>
      <h5 className="profile--profession">Frontend Developer</h5>
      <h6 className="profile--website"> laurasmith.website </h6>
      <div className="contacts">
        <div className="button color--email">
          <img src={Mail} alt="button" className="size" />
          <h3 className="button--text">Email</h3>
        </div>
        <div className="button color--linkedin">
          <img src={LinkedInLogo} alt="button" className="size" />
          <h3 className="button--text">LinkedIn</h3>
        </div>
      </div>
    </div>
  )
}