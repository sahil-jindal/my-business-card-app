import Mainbody from "./Mainbody";
import Profile from "./Profile";

export default function Card() {
  return (
    <div className="card">
      <div className="card--main">
        <Profile />
        <Mainbody />
      </div>
    </div>
  )
}