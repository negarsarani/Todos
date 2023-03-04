import Mainperent from '@/layout';
import El from '@/library/El';
const App = () => {
  const app = El({
    element: 'div',
    className: 'parent bg-red-300',
    child: 'salam',
  });
  return Mainperent(app);
};

export default App;
