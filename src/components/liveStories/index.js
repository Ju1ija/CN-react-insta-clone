import profile1 from "./profile1.png";
import profile2 from "./profile2.png";
import profile3 from "./profile3.jpeg";
import profile4 from "./profile4.png";
import profile5 from "./profile5.png";
import "./liveStories.css"

export const profiles = [
  {
    image: profile1,
    name: "andriuslipnickis"
  },
  {
    image: profile2,
    name: "oncyfia"
  },
  {
    image: profile3,
    name: "apple"
  },
  {
    image: profile4,
    name: "developer.arthur"
  },
  {
    image: profile5,
    name: "julccia1"
  }
]

export const LiveStories = () => {
  return (
    <div className="live-stories">
      {profiles.map((item, index) => {
        return (
          <div key={index}>
            <div className="gradient">
              <img src={item.image} alt="Profile picture" />
            </div>
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
}