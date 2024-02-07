import { Route } from 'react-router';

import HomePage from './components/pages/homepage'
import ExperienceDetails from './components/pages/experience-page';
<Route path="/experiecnce/:id" component={ExperienceDetails} />

function App() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;