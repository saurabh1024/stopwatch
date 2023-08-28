import './App.css';
import Controller from './components/Controller';
import Counter from './components/Counter';

function App() {
  return (
    <div className="h-screen container flex-column p-4">
      <div className='text-2xl font-medium'>Stop Watch</div> 
      <div>
        <Counter />
        <Controller />
      </div>
    </div>
  );
}

export default App;
