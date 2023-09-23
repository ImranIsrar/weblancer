
// This Api used for Selection Theme
export const theme = [
  {"id": "1", "name": "theme_1", "imgName": "theme_1.png"},
  {"id": "2", "name": "theme_2", "imgName": "theme_2.png"},
  {"id": "3", "name": "theme_3", "imgName": "theme_3.png"}
];


// This APi is used Which Theme Assigned to User
// export const assignedTheme = [
//   {
//     "id": "1", 
//     "selectedThemeId": "2",
//     "themeStyles": [
//       "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
//       "https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css",
//       "css-animate.css",
//       "css-flaticon.css",
//       "css-tiny-slider.css",
//       "css-glightbox.min.css",
//       "css-aos.css",
//       "css-style.css"
//     ],
//     "themeJscript": [
//       "js-bootstrap.bundle.min.js",
//       "js-tiny-slider.js",
//       "js-glightbox.min.js",
//       "js-aos.js",
//       "js-typewritter.js",
//       "js-slideNav.js",
//       // "js-https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false",
//       // "js-google-map.js",
//       "js-main.js"
//     ]
//   },
//   {
//     "id": "2",
//     "selectedThemeId": "3",
//     "themeStyles": [
//       // "css-bootstrap.min.css",
//       "css-owl.carousel.min.css",
//       "css-slicknav.css",
//       "css-flaticon.css",
//       "css-animate.min.css",
//       "css-magnific-popup.css",
//       "css-fontawesome-all.min.css",
//       "css-themify-icons.css",
//       "css-slick.css",
//       "css-nice-select.css",
//       "css-style.css"
//     ],
//     "themeJscript": [
//       "vendor-modernizr-3.5.0.min.js",
//       // "js-popper.min.js",
//       // "js-bootstrap.min.js",
//       "js-jquery.slicknav.min.js",
//       "js-owl.carousel.min.js",
//       "js-slick.min.js",
//       "js-wow.min.js",
//       "js-animated.headline.js",
//       "js-jquery.magnific-popup.js",
//       "js-jquery.nice-select.min.js",
//       // "js-jquery.sticky.js",
//       // "js-contact.js",
//       // "js-jquery.form.js",
//       // "js-jquery.validate.min.js",
//       // "js-mail-script.js",
//       // "js-jquery.ajaxchimp.min.js",
//       // "js-plugins.js",
//       "js-main.js"
//     ]
//   },
//   {
//     "id": "3", 
//     "selectedThemeId": "1",
//     "themeStyles": [
//     //  "bootstrap.min.css",
//      "owl.carousel.min.css",
//      "magnific-popup.css",
//      "font-awesome.min.css",
//      "themify-icons.css",
//      "nice-select.css",
//      "flaticon.css",
//      "gijgo.css",
//      "animate.min.css",
//      "slick.css",
//      "slicknav.css",
//      "style.css"
//     ],
//     "themeJscript": [
//       "modernizr-3.5.0.min.js",
//       // "popper.min.js",
//       // "bootstrap.min.js",
//       "owl.carousel.min.js",
//       "isotope.pkgd.min.js",
//       "ajax-form.js",
//       // "waypoints.min.js",
//       "jquery.counterup.min.js",
//       "imagesloaded.pkgd.min.js",
//       "scrollIt.js",
//       "jquery.scrollUp.min.js",
//       "wow.min.js",
//       "nice-select.min.js",
//       "jquery.slicknav.min.js",
//       "jquery.magnific-popup.min.js",
//       // "plugins.js",
//       "gijgo.min.js",
//       "contact.js",
//       "jquery.ajaxchimp.min.js",
//       "jquery.form.js",
//       "jquery.validate.min.js",
//       "mail-script.js",
//       "main.js",
//     ]
//   }
// ];

// galleryImages
export const galleryImages = [
  {
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];


export let loginUsers = [
  {
    id: '1',
    name: 'test', email: 'test@gmail.com', phone: '12345678', password: '123456',
    selected_theme: {id:"2", name:"theme_2", imgName:"theme_2.png"},
    profile: {},
    fav: []
  },
  {
    id: '2',
    name:"Imran Israr", email:"test2@gmail.com", phone:"12345678", password:"123456",
    selected_theme: {id:"3", name:"theme_3", imgName:"theme_3.png"},
    profile: {
      professional: "UX/UI Designer",
      rate_per_hr: "60",
      country: "Pakistan",
      tag_line: "Creating Tomorrow's Elegance Today",
      yourself: "A creative visionary whose designs transcend the ordinary. With an eye for innovation and a passion for aesthetics, Imran Israr crafts experiences that redefine beauty and functionality. Join us on a journey where design becomes art, and where every project is an embodiment of their unique perspective."
    },
    fav: ["1", "2"]
  },
  {
    id: '3',
    name:"Ali", email:"test3@gmail.com", phone:"12345678", password:"123456",
    selected_theme: {id:"1", name:"theme_1", imgName:"theme_1.png"},
    profile: {},
    fav: []
  },
  {
    id: '4',
    name:"Shehnawar Butt", email:"shehnawarbutt@gmail.com", phone:"12345678", password:"123456", 
    selected_theme: {id:"3", name:"theme_3", imgName:"theme_3.png"},
    profile: {},
    fav: []
  },
  {
    // id:"1", name:"theme_1", imgName:"theme_1.png"
    id: '5',
    name:"Abid Hussain", email:"abidhussain@gmail.com", phone:"12345678", password:"123456", 
    selected_theme: {},
    profile: {},
    fav: ["2", "4"]
  }
]