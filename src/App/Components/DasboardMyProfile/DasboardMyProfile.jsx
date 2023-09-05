import './styles.css';
import kamil from '../../Images/kamil.jpg';

export const DasboardMyProfile = () => {
  return (
    <div className="profile">
      <div className="profile-content">
        <img className="myPhoto" src={kamil} />
        <div>
          <p className="name">Kamil Cybulski</p>
          <p>Gdańsk</p>
        </div>
        <div className="contact">
          <div className="mail">
            <p>e-mail:</p>
            <p>kcybulski93@gmail.com</p>
          </div>
          <div className="phone">
            <p>telefon:</p>
            <p>505 380 358</p>
          </div>
        </div>
      </div>
    </div>
  );
};
