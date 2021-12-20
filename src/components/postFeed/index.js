import "./postFeed.css";

export const PostFeed = (props) => {
  return (
    <div className="post">
      <div className="post-top">
        <div className="account">
          <img src={props.item.profile.image} alt="Profile picture" />
          <h5>{props.item.profile.name}</h5>
        </div>
        <i class="bi bi-three-dots"></i>
      </div>
      <div className="post-picture">
        <img src={props.item.url} alt="" />
      </div>
      <div className="post-bottom">
        <div className="insta-post-icons">
          <div className="icon-spacing">
            <i class="bi bi-heart"></i>
            <i class="bi bi-chat"></i>
            <i class="bi bi-share"></i>
          </div>
          <i class="bi bi-bookmark"></i>
        </div>
        <div>
          <p className="bold medium-text">{props.item.likes} likes</p>
          <p className="grey medium-text">View all {props.item.comments} comments</p>
          <p className="grey small">{props.item.time} MINUTES AGO</p>
        </div>
      </div>
    </div >
  )
}
