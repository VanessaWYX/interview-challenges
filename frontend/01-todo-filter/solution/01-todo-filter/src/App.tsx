import './App.css'
import ToDoGrid from './components/todoGrid'

function App() {

  return (
    <>
      <section id="dashboard">
        <div>
          <h1>To-Do List</h1>
        </div>
        <div>
          <ToDoGrid/>
        </div>
      </section>

    </>
  )
}

export default App
