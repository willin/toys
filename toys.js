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
        {
          name: 'GH40',
          meta: '40% Cyan Switch'
        },
        {
          name: 'Filco 87',
          meta: '80% Cyan Switch'
        },
        {
          name: 'Qmkeyboard',
          meta: '60% Cyan Switch',
          year: 2017,
          bought: true
        },
        {
          name: 'Logitech MX Master 2S',
          year: 2017,
          bought: true
        },
        {
          name: 'Logitech K780',
          year: 2015,
          bought: true
        },
        {
          name: 'Logitech MX Master',
          year: 2016,
          bought: true,
          deleted: true
        },
        {
          name: 'Razer DeathAdder 2013',
          year: 2016,
          bought: true
        },
        {
          name: 'HHKB Pro 2 Type-S',
          meta: '60% Capacitive',
          year: '2016',
          bought: true
        },
        {
          name: 'Magic Mouse 2',
          year: '2016',
          bought: true,
          deleted: true
        },
        {
          name: 'ikbc Poker 3',
          meta: '100% Green Switch',
          year: '2015',
          bought: true
        },
        {
          name: 'Logitech K480',
          year: 2015,
          bought: true,
          deleted: true
        },
        {
          name: 'SteelSeries Sensei',
          year: 2015,
          bought: true,
          deleted: true
        },
        {
          name: 'Cherry G80-1869HYNUS-2',
          meta: '100% Red Switch',
          year: '2014',
          bought: true
        },
        {
          name: 'Mad Catz R.A.T.9',
          year: '2013',
          bought: true,
          deleted: true
        },
        {
          name: 'Magic Mouse',
          year: '2011',
          bought: true,
          deleted: true
        }
      ]
    },
    {
      category: 'Phones',
      items: [
        {
          name: 'iPhone 8'
        },
        {
          name: 'iPhone 7 plus',
          year: 2017,
          bought: true
        },
        {
          name: 'iPhone 6s',
          year: 2016,
          bought: true,
          deleted: true
        },
        {
          name: 'Samsung Galaxy S7',
          year: 2016,
          bought: true,
          deleted: true
        },
        {
          name: 'Samsung Galaxy S6',
          year: 2015,
          bought: true,
          deleted: true
        },
        {
          name: 'iPhone 6s plus',
          year: 2015,
          bought: true,
          deleted: true
        },
        {
          name: 'iPhone 6 plus',
          year: 2014,
          bought: true,
          deleted: true
        },
        {
          name: 'iPhone 5',
          year: 2012,
          bought: true,
          deleted: true
        },
        {
          name: 'iPhone 4s',
          year: 2011,
          bought: true,
          deleted: true
        },
        {
          name: 'Nokia N97',
          year: 2010,
          bought: true,
          deleted: true
        },
        {
          name: 'Samsung Anycall i458',
          year: 2008,
          bought: true,
          deleted: true
        }
      ]
    },
    {
      category: 'Wrist Devices',
      items: [
        {
          name: 'Apple Watch S2',
          meta: '42mm',
          year: 2017,
          bought: true
        },
        {
          name: 'Garmin Forerunner 225',
          year: 2015,
          bought: true,
          deleted: true
        },
        {
          name: 'Nike+ FuelBand 2',
          year: 2014,
          bought: true,
          deleted: true
        },
        {
          name: 'Fitbit Flex',
          year: 2013,
          bought: true,
          deleted: true
        }
      ]
    },
    {
      category: 'Geeks',
      items: [
        {
          name: 'Phlips 288P6LJEB',
          meta: '4K, 28\'',
          year: 2016,
          bought: true
        },
        {
          name: 'AOC C3583FQ/WS',
          meta: '2K, 35\'',
          year: 2016,
          bought: true
        },
        {
          name: 'Kindle Voyage',
          year: 2015,
          bought: true,
          deleted: true
        },
        {
          name: 'AOC U2870VQE',
          meta: '4k, 28\'',
          year: 2014,
          bought: true,
          deleted: true
        }
      ]
    }
  ];
}(typeof window === 'undefined' ? exports : window));
