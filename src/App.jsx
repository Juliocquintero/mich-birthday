import "./App.css";
import aguacate from "./assets/aguacate.png";
import michi from "./assets/michi.jpg";
import PlayButton from "./Components/PlayButton/PlayButton";

function App() {
  const handlePlayClick = () => {
    console.log("Play button clicked!");
  };
  return (
    <>
      <div className="card">
        <div className="back">
          <img src={michi} className="back-img img" />
        </div>
        <div className="front">
          <div className="cover-shape-large">
            <div className="shape-diamond"></div>
            <div className="shape-block"></div>
          </div>
          <div className="cover-shape-small">
            <div className="shape-diamond"></div>
            <div className="shape-block">
              <div className="cake">
                <div className="layer layer-bottom"></div>
                <div className="layer layer-middle"></div>
                <div className="layer layer-top"></div>
                <div className="icing"></div>
                <div className="drip drip1"></div>
                <div className="drip drip2"></div>
                <div className="drip drip3"></div>
                <div className="candle">
                  <div className="flame"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-container">
          <img src={aguacate} className="aguacate-img img" />
          <p id="head">¡Feliz cumpleaños Michi!</p>
          <p>
            Deseo que todos tus deseos se cumplan, que pases un día increíble y
            que nunca dejes de ser tu misma. Gracias por compartir tu amistad
            conmigo. Aunque seáis una COLOMBIANA, sabéis que te quiero
            enormemente ❤️
          </p>
          <p>Te dejo esta canción que siempre me recordará a ti.</p>

          <br />
          <PlayButton onClick={handlePlayClick} />
        </div>
      </div>
    </>
  );
}

export default App;
