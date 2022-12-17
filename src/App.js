
import Container from './components/Container/Container'
import Timer from './components/Timer/Timer';
import './styles/normalize.scss';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Timer />
      </Container>
    </div>
  );
}

export default App;
