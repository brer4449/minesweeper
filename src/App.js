import './App.css';

function App() {
  const backgroundStyles = {   
    backgroundImage: `url(https://st2.depositphotos.com/1526816/6712/v/450/depositphotos_67129419-stock-illustration-forest.jpg)`,
    height: "100vh",
    width: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  return (
    <div style={backgroundStyles}>
        <h1>hello world</h1>
    </div>
  );
}

export default App;
