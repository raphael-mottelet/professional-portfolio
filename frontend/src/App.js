import { Route } from 'react-router';

import HomePage from './components/pages/homepage'
import EducationDetails from './components/pages/education-page';

<Route path="/experiecnce/:id" component={EducationDetails} />

function App() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;