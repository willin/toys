/* global window */
/* eslint-disable no-param-reassign */
(function Toys(exports) {
  exports.toys = [
    {
      category: 'Computers & Laptops',
      items: [
        {
          name: 'Dell Vestro 1310',
          meta: '13\'',
          year: '2008',
          bought: true,
          deleted: true
        },
        {
          name: 'MacBook Air',
          meta: '11\'',
          year: '2011',
          bought: true,
          deleted: true
        }
      ]
    },
    {
      category: 'Keyboards & Mouse',
      items: [

      ]
    },
    {
      category: 'Phones'
    },
    {
      category: 'Wrist Devices'
    },
    {
      category: 'Geeks'
    }
  ];
}(typeof window === 'undefined' ? exports : window));
