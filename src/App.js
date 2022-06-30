import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className='row'>
      <Card title="first card" content="first card content" button="first card button"></Card>
      <Card title="second card" content="second card content" button="second card button"></Card>
      <Card title="third card" content="third card content" button="third card button"></Card>
    </div>
  );
}

export default App;
