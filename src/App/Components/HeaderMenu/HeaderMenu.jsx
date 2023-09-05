import { ToggleArrow } from '../Icons/ToggleArrow';
import './styles.css';

export const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <div className="headerMenuIcon" />
      <div className="headerUser">
        <p>Kamil</p>
        <p>kursant</p>
      </div>
      <ToggleArrow />
    </div>
  );
};
