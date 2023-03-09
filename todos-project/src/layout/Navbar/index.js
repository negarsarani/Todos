import El from '@/library/El';
import { RightNav } from './RightNav';
export const Navbar = () => {
  return El({
    element: 'div',
    className: ' w-full  bg-purple-700 md:flex justify-between  ',
    child: [
      El({
        element: 'div',
        className:
          'flex md:bg-purple-700 bg-purple-600 bg-opacity-45 items-center justify-center gap-1 p-3 ',
        child: [
          El({
            element: 'img',
            className: 'md:block hidden',
            src: './src/assest/svgs/list-svgrepo-com (1).svg',
          }),
          El({
            element: 'span',
            className: 'text-white text-lg',
            child: 'My To-Do Tasks',
          }),
        ],
      }),
      RightNav(),
    ],
  });
};
{
  // <div class="items-center justify-center visible text"></div>
}
