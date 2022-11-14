
import { CreateItem } from './components/CreateItem';
import { Header } from './components/Header';
import { ListItem } from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import './global.scss';

const tasks = [
  {
    id: uuidv4(),
    content: 'shuhdusudahdouahouhdoawiwqhdiq',
    isChecked: false
  },
  {
    id: uuidv4(),
    content: 'testetesttddygywgdywgudggwudwod',
    isChecked: false
  },
  {
    id: uuidv4(),
    content: 'kdlskdljdlsdkdkwbdwkodbojwvdojwd',
    isChecked: false
  }
]
function App()  {
  return (
    <div>
      <Header />
      <CreateItem />
      {
        tasks.map(task => {
          return (
            <ListItem 
              key={task.id}
              content={task.content}
              isChecked={task.isChecked}
            
            />
          )
        })
      }
      
    </div>
  )
}

export default App
