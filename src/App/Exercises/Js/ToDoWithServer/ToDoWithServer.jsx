import './styles.css';
import hookDone from './img/hookDone.svg';
import hookToSelect from './img/hookToSelect.svg';
import pencil from './img/pencil.svg';
import basket from './img/basket.svg';
import { fetchData, sendData } from './api/todoListApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { ErrorView } from './ErrorView';
import { Loader } from './Loader';

export function ToDoWithServer() {
  const [getToDoList, setToDoList] = useState([]);
  const [getIsLoadingList, setIsLoadingList] = useState(true);
  const [getErrorMessage, setErrorMessage] = useState(null);
  const [getKickComponent, setKickComponent] = useState(null);

  const fetchToDoData = async () => {
    setIsLoadingList(true);
    try {
      const responseData = await fetchData('api/todo');
      setToDoList(responseData);
      setIsLoadingList(false);
    } catch (error) {
      setErrorMessage(error);
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    fetchToDoData();
  }, [getKickComponent]);

  const handleDelete = (id) =>
    sendData(`api/todo/${id}`, [], 'DELETE').then((response) =>
      setKickComponent(response)
    );

  if (getErrorMessage) {
    return <ErrorView error={getErrorMessage} />;
  }

  if (getIsLoadingList) {
    return <Loader />;
  }

  return (
    <div>
      <div className="to-do-title">
        <p>Tutaj znajdziesz listę swoich zadań</p>
        <button className="small-add-button">+</button>
      </div>
      <div className="article-list">
        {getToDoList.map((obj) => {
          return (
            <div className={obj.isDone ? 'article-done' : 'article'}>
              <div className="article-text">
                <div className="article-title">
                  <p>{obj.title}</p>
                </div>
                <div className="article-name-date">
                  <p>{obj.author}</p>
                  <p>{obj.createdAt}</p>
                </div>
                <div className="article-content">
                  <p>{obj.note}</p>
                </div>
              </div>
              {obj.isDone ? (
                <div className="article-icons">
                  <div className="article-to-select-icons">
                    <img src={pencil} alt="pencil" />
                    <img
                      onClick={() => handleDelete(obj.id)}
                      src={basket}
                      alt="basket"
                    />
                  </div>
                  <div className="article-done-icon">
                    <img src={hookDone} alt="hookDone" />
                    <p>{obj.doneDate}</p>
                  </div>
                </div>
              ) : (
                <div className="article-icons">
                  <div className="article-to-select-icons">
                    <img src={hookToSelect} alt="hookToSelect" />
                    <img src={pencil} alt="pencil" />
                    <img
                      onClick={() => handleDelete(obj.id)}
                      src={basket}
                      alt="basket"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="add-button">
        <button className="big-add-button">DODAJ</button>
      </div>
      <div>
        <div className="announcement-content">
          <p>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.</p>
        </div>
      </div>
    </div>
  );
}
