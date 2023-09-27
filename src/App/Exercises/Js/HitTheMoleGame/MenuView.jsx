import { FirstRowButtons } from './FirstRowButtons';
import { SecondRowButtons } from './SecondRowButtons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThirdRowButtons } from './ThirdRowButtons';

export function MenuView({
  setStartGame,
  firstRowChosenButton,
  setFirstRowChosenButton,
  secondRowChosenButton,
  setSecondRowChosenButton,
  thirdRowChosenButton,
  setThirdRowChosenButton,
  setScore,
  setRowsNumber,
  rowsNumber,
  setColumnsNumber,
  columnsNumber,
}) {
  const handleClick = () => {
    if (firstRowChosenButton && secondRowChosenButton) {
      setStartGame(true);
      setScore(0);
    }
  };

  const handleColumnsClick = (event) => {
    setColumnsNumber(event.target.value);
  };

  const handleRowsClick = (event) => {
    setRowsNumber(event.target.value);
  };

  return (
    <div className="game-menu">
      <div className="game-time">
        <p>CZAS GRY</p>
        <FirstRowButtons
          firstRowChosenButton={firstRowChosenButton}
          setFirstRowChosenButton={setFirstRowChosenButton}
        />
      </div>
      <div className="moles-number">
        <p>LICZBA KRETÓW</p>
        <SecondRowButtons
          secondRowChosenButton={secondRowChosenButton}
          setSecondRowChosenButton={setSecondRowChosenButton}
        />
      </div>
      <div className="hidden-squares">
        <p>UKRYTE KRATKI</p>
        <ThirdRowButtons
          thirdRowChosenButton={thirdRowChosenButton}
          setThirdRowChosenButton={setThirdRowChosenButton}
        />
      </div>
      <div></div>
      <div className="control-button">
        <p>PRZYCISKI STERUJĄCE</p>
        <div className="control-button-button">
          <button className="small-button" onClick={handleClick}>
            START
          </button>
        </div>
        <div>
          <FormControl
            className="columnButton"
            sx={{ m: 6, minWidth: 120 }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Kolumny</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={columnsNumber}
              label="Columns"
              onChange={handleColumnsClick}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Wiersze</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={rowsNumber}
              label="Rows"
              onChange={handleRowsClick}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
