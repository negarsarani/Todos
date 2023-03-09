import El from '@/library/El';

export const RightNav = () => {
  return El({
    element: 'div',
    className: 'flex p-2 gap-2 justify-between ',
    child: [
      El({
        element: 'div',
        className: 'flex p-2 px-4 gap-1 bg-purple-600 w-8/12',
        child: [
          El({
            element: 'img',
            src: './src/assest/svgs/magnifier-glass-svgrepo-com.svg',
          }),
          El({
            element: 'input',
            className: 'outline-none bg-transparent text-white ',
            placeholder: 'Search',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-2 w-4/12 justify-end px-2',
        child: [
          El({
            element: 'img',
            className: 'w-9',
            src: './src/assest/svgs/filter-fill-svgrepo-com.svg',
          }),
          El({
            element: 'img',
            className: 'w-9',
            src: './src/assest/svgs/plus-circle-svgrepo-com.svg',
          }),
        ],
      }),
    ],
  });
};
{
  // <div class="outline-none bg-transparent grid grid-cols-2 "></div>
}
