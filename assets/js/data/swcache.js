const resource = [

  /* --- CSS --- */
  '/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/assets/js/dist/home.min.js',
  '/assets/js/dist/page.min.js',
  '/assets/js/dist/post.min.js',
  '/assets/js/dist/categories.min.js',
  '/assets/js/data/search.json',
  '/app.js',
  '/sw.js',

  /* --- HTML --- */
  '/index.html',
  '/404.html',
  
    '/categories/',
  
    '/tags/',
  
    '/archives/',
  
    '/now/',
  
    '/about/',
  
    '/series/',
  

  /* --- Icons --- */
  
  '/assets/img/favicons/favicon.ico',
  '/assets/img/favicons/apple-icon.png',
  '/assets/img/favicons/apple-icon-precomposed.png',
  '/assets/img/favicons/apple-icon-57x57.png',
  '/assets/img/favicons/apple-icon-60x60.png',
  '/assets/img/favicons/apple-icon-72x72.png',
  '/assets/img/favicons/apple-icon-76x76.png',
  '/assets/img/favicons/apple-icon-114x114.png',
  '/assets/img/favicons/apple-icon-120x120.png',
  '/assets/img/favicons/apple-icon-144x144.png',
  '/assets/img/favicons/apple-icon-152x152.png',
  '/assets/img/favicons/apple-icon-180x180.png',
  '/assets/img/favicons/android-icon-192x192.png',
  '/assets/img/favicons/favicon-32x32.png',
  '/assets/img/favicons/favicon-96x96.png',
  '/assets/img/favicons/favicon-16x16.png',
  '/assets/img/favicons/ms-icon-144x144.png',
  '/assets/img/favicons/manifest.json',
  '/assets/img/favicons/browserconfig.xml'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  
    'www.googletagmanager.com',
    'www.google-analytics.com',
  

  'jason.teamkerney.com',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

