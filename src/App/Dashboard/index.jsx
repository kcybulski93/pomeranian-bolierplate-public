import { DasboardMyProfile } from '../Components/DasboardMyProfile/DasboardMyProfile';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <main className="dashboard-content">
        <section className="title">
          <div className="name"></div>
          <p className="title-content"></p>
        </section>
        <section className="articles"></section>
      </main>
      <DasboardMyProfile />
    </div>
  );
};
