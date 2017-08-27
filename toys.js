/* global window */
/* eslint-disable no-param-reassign */
(function Toys(exports) {
  exports.toys = [
    {
      category: 'Computers & Laptops',
      items: [
        {
          name: 'iMac Pro'
        },
        {
          name: 'iPad Pro'
        },
        {
          name: 'MacBook Pro',
          meta: 'with Touch Bar, 15\'',
          year: '2016',
          bought: true
        },
        {
          name: 'MacBook Pro',
          meta: '13\'',
          year: '2015',
          bought: true,
          deleted: true
        },
        {
          name: 'Terrans Force',
          meta: 'Clevo W230ST, 13\'',
          year: '2014',
          bought: true,
          deleted: true
        },
        {
          name: 'MacBook Pro',
          meta: '15\'',
          year: '2013',
          bought: true,
          deleted: true
        },
        {
          name: 'MacBook Air',
          meta: '11\'',
          year: '2011',
          bought: true,
          deleted: true
        },
        {
          name: 'Dell Vestro 1310',
          meta: '13\'',
          year: '2008',
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
