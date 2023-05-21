import Style from "./Card.module.scss";
import { ReactComponent as Logo } from "../../images/logo/logo.svg";
import card from "../../images/card.png";
import UserPhoto from "../../images/user_foto.png";
import { ItemProps } from "../../features/Models";

export const Item: React.FC<ItemProps> = ({ user, onFollow }) => {
const num = user.followers;
 const re = /\B(?=(\d{3})+(?!\d))/g;
 const newstr = num.toString().replace(re, ",");
  return (
    <div className={Style.main__item}>
      <Logo style={{ position: "absolute", top: "20px", left: "20px" }} />
      <div className={Style.main__item_imageWrapper}>
        <img src={card} alt="messages_image" width={308} height={168} />
      </div>
      <div className={Style.maim__item_line}>
        <div className={Style.main__item_photoFrame}>
          <div className={Style.main__item_userPhoto}>
            <img
              style={{ borderRadius: "50%" }}
              src={user ? user.avatar : UserPhoto}
              alt="user_photo"
              width={62}
              height={62}
            />
          </div>
        </div>
      </div>

      <p className={Style.main__item_text}>{user.tweets} tweets</p>
      <p className={Style.main__item_text} style={{ marginTop: "16px" }}>
        {newstr} followers
      </p>

      <button
        className={Style.main__item_button}
        onClick={() => onFollow(user.id)}
        style={{ backgroundColor: user.add ? "#5CD3A8" : "#ebd8ff" }}
      >
        {user.add ? "Following" : "Follow"}
      </button>
    </div>
  );
};

