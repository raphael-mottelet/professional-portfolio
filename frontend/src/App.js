import { Route } from 'react-router';

import HomePage from './components/pages/homepage'
import TodoDetail from './components/pages/todo-page';

<Route path="/todo/:id" component={TodoDetail} />

function App() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;