import Mainbody from "./Mainbody";
import Profile from "./Profile";
import Socials from "./Socials";

export default function Card() {
  return (
    <div className="card">
      <div className="card--main">
        <Profile />
        <Mainbody />
        <Socials />
      </div>
    </div>
  )
}