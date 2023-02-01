import "./style.css";
import girl from "./images/girl.jpeg";

export const Header = () => {
    return (
        <div className="avatar-wrapper">
            <div className="avatar-wrapper__image">
                <img src={girl} />
            </div>
            <div className="avatar-wrapper__user-info">
                <div className="user-info__name">Eva Jonson</div>
                <div className="user-info__role">Sales Manager</div>
                <div className="user-info__descriprion">
                    <span>
                    I will find the best offers for you.  My services are absolutely free.
                    </span>
                </div>
            </div>
        </div>
    );
};
