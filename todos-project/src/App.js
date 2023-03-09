import { Navbar } from '@/layout';
import El from '@/library/El';
const App = () => {
  const app = El({
    element: 'div',
    child:[
      Navbar()
    ]
  });
  return app;
};

export default App;
