import El from '@/library/El';

export const HeaderTable = () => {
  El({
    element: 'tr',
    child: [
      El({
        element: 'th',
        child: 'Task Name',
      }),
      El({
        element: 'th',
        child: 'Priority',
      }),
      El({
        element: 'th',
        child: 'Status',
      }),
      El({
        element: 'th',
        child: 'Deadline',
      }),
      El({
        element: 'th',
        child: 'Actions',
      }),
    ],
  });
};
