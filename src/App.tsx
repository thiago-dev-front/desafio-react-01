
import { CreateItem } from './components/CreateItem';
import { Header } from './components/Header';
import { ListItem } from './components/ListItem';

import './App.scss';
import './global.scss';

function App() {
  return (
    <div>
      <Header />
      <CreateItem />
      <ListItem />
    </div>
  )
}

export default App
