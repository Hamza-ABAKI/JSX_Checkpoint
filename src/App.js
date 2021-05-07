// import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 2px black", maxWidth: "100vw" }}>
        <h1
          className="title red"
          style={{
            color: "red",
            margin: "5px 10px",
            padding: "5px 5px",
            textAlign: "center",
          }}
        >
          Hey !!! My name is Hamza
        </h1>
        {/* <br /> */}
        <div className="image">
          <div className="source">
            <img src={imageInSrc} alt="imageInSrc" />
            <h3>This image from src folder</h3>
          </div>
          {/* <br /> */}
          <div className="public">
            <img src="/imageInPublic.jpg" alt="imageInPublic" />
            <h3>This image from public folder</h3>
          </div>
        </div>
      </div>
      <div className="vid">
        <h4>Al-HATABA</h4>
        <iframe
          title="Al-Hataba"
          width={520}
          height={360}
          src="https://www.youtube.com/embed/BiLHVmphUwA"
        />
      </div>
    </div>
  );
}

export default App;
