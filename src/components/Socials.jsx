import FacebookIcon from "../images/Facebook Icon.svg";
import GitHubIcon from "../images/GitHub Icon.svg";
import InstagramIcon from "../images/Instagram Icon.svg";
import TwitterIcon from "../images/Twitter Icon.svg";

export default function Socials() {
  return (
    <div className="row">
      <div className="column">
        <img src={TwitterIcon} alt="twitter" className="socials--size" />
      </div>
      <div className="column">
        <img src={FacebookIcon} alt="facebook" className="socials--size" />
      </div>
      <div className="column">
        <img src={InstagramIcon} alt="instagram" className="socials--size" />
      </div>
      <div className="column">
        <img src={GitHubIcon} alt="github" className="socials--size" />
      </div>
    </div>
  )
}