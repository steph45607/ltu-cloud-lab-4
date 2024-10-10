import List from './components/List';
import './App.css';

const tasks=[
    { description: "Anya", completed:true},
    { description: "Steph", completed:false},
    { description: "Stanis", completed:false},
]

function App() {
    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={tasks}/>
        </div>
    );
}

export default App;
