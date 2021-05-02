import logo from './logo.svg';
import './App.css';
import {Kanban} from './Kanban'

function App() {

  const resp = [{
    name: 'Open',
    color: '#f5d8d8',
    cardList: [{
      title: 'Setup react project',
      description: 'project setup',
      lastUpdated: '2021-11-23'
    },
    {
      title: 'Setup node project',
      description: 'project setup',
      lastUpdated: '2021-11-23'
    },
    {
      title: 'Analyse existing system',
      description: 'project setup',
      lastUpdated: '2021-11-23'
    }]
  },

  {
    name: 'In Progress',
    color: '#dedec0',
    cardList: [{
      title: 'DB setup',
      description: 'db setup',
      lastUpdated: '2021-03-12'
    },
    {
      title: 'DB schema',
      description: 'db setup',
      lastUpdated: '2021-03-12'
    }]
  },

  {
    name: 'Resolved',
    color: '#E0DEDC',
    cardList: [{
      title: 'Finalise Tech stack',
      description: 'finalise tech stack',
      lastUpdated: '2021-01-03'
    }]
  }];

  return (
    <div className="App">
      <Kanban columnList={resp} />
    </div>
  );
}

export default App;
