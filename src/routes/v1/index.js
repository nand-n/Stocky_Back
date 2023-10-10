const express = require('express');

const seller = require("./seller.route")
const buyer = require("./buyer.route")
const contact = require("./contact.route")



const router = express.Router();

const defaultRoutes = [
  {
    path: '/seller',
    route: seller,
  },
  {
    path: '/buyer',
    route: buyer,
  },
  {
    path: '/contact',
    route: contact,
  },
  
];

const devRoutes = [
  // routes available only in development mode
  // {
  //   path: '/docs',
  //   route: docsRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
