import Mainbody from "./Mainbody";
import Profile from "./Profile";

export default function Card() {
  return (
    <div className="card">
      <Profile />
      <Mainbody />
    </div>
  )
}