import './styles.css';
import discord from '../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import github from '../Images/tech-stack/githuub.svg';
import html from '../Images/tech-stack/html.svg';
import jira from '../Images/tech-stack/jira 1.png';
import js from '../Images/tech-stack/js.svg';
import react from '../Images/tech-stack/react.svg';
import redmine from '../Images/tech-stack/redmine.png';
import redux from '../Images/tech-stack/redux.png';
import ts from '../Images/tech-stack/ts.svg';
import vscode from '../Images/tech-stack/vscode-alt 1.png';

export const TechStack = () => {
  return (
    <div className="grid">
      <div className="item1">
        <img src={discord} alt="Discord" />
        <p>Discord</p>
      </div>
      <div className="item2">
        <img src={github} alt="Github" />
        <p>Github</p>
      </div>
      <div className="item3">
        <img src={html} alt="HTML" />
        <p>Github</p>
      </div>
      <div className="item4">
        <img src={jira} alt="JIRA" />
        <p>JIRA</p>
      </div>
      <div className="item5">
        <img src={js} alt="JS" />
        <p>JS</p>
      </div>
      <div className="item6">
        <img src={react} alt="React" />
        <p>React</p>
      </div>
      <div className="item7">
        <img src={redmine} alt="Redmine" />
        <p>Redmine</p>
      </div>
      <div className="item8">
        <img src={redux} alt="Redux" />
        <p>Redux</p>
      </div>
      <div className="item9">
        <img src={ts} alt="TS" />
        <p>TS</p>
      </div>
      <div className="item10">
        <img src={vscode} alt="Vscode" />
        <p>Vscode</p>
      </div>
    </div>
  );
};
