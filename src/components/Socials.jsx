import FacebookIcon from "../images/Facebook Icon.png";
import GitHubIcon from "../images/GitHub Icon.png";
import InstagramIcon from "../images/Instagram Icon.png";
import TwitterIcon from "../images/Twitter Icon.png";

export default function Socials() {
  return (
    <div className="row">
      <div className="column">
        <img src={TwitterIcon} alt="facebook" className="socials--size" />
      </div>
      <div className="column">
        <img src={FacebookIcon} alt="facebook" className="socials--size" />
      </div>
      <div className="column">
        <img src={InstagramIcon} alt="facebook" className="socials--size" />
      </div>
      <div className="column">
        <img src={GitHubIcon} alt="facebook" className="socials--size" />
      </div>
    </div>
  )
}