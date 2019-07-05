$(function () {

  /*$('.searchform').on('submit', function(event) {
    event.preventDefault();

    var $form = $(this);

    // Gets searched value
    var search = $('.search').val();

    // Gets search action
    var action = $form.attr('action') + '?q=' + search;

    // Creates iframe and appends to container
    var iframe = '<iframe src="'+ action +'"></iframe>';
    $('.left-side-profileContainer').prepend(iframe);

    window.open(action, 'Google Search', 'width=800, height=500');
  });*/

  var popUpTargets = [
      '.right-side-profileContent a',
      '.pop-up-link',
      '.images-bottom-container a',
      '.main-grid a',
      '.calendar-email a'
  ].join();

  $(document).on('click', popUpTargets, function(event) {
    // Don't open link
    event.preventDefault();

    this; // Some link HTML element


    var defaultPosition = '200 100';

    var $link = $(this);
    var pos = ($(this).data('position') || defaultPosition).split(' ');
    var size = $link.data('size') || 'large';

    this; // Some link HTML element
    $link; // Some link HTML element.. but jQuery "version"

    console.log(pos)

    var config = {
      large: [
        'width=1220',
        'height=665',
        'top='+ pos[0],
        'left='+ pos[1]
      ],
      medium: [
        'width=800',
        'height=400',
        'top='+ pos[0],
        'left='+ pos[1]
      ],
      small: [
        'width=500',
        'height=500',
        'top='+ pos[0],
        'left='+ pos[1]
      ]
    }[size];

    console.log('config', config)

    // Opens it on a custom window
    var link = $(this).attr('href');
    window.open(link, link, config.join());
  });

  $('form.searchform').on('submit', function(event) {
    event.preventDefault();
    var search = $('[name="q"]').val();
    var url = 'https://www.google.com/search?q=' + search;

    window.open(url, 'Google Search', 'width=800, height=500, top=200, left=200');
  })

  $('.near-me').on('click', function() {
    console.log('click!')
    var input = $('[name="q"]');
    var value = input.val();

    input.val(value + ' near me');

    setTimeout(function () {
      input.val(value);
    });
  });
  // const config = {
  //   apiKey: "AIzaSyA1W6fgbxENa7AbChzrZuKVRFSiQwBauLg",
  //   authDomain: "cproject-9bb5f.firebaseapp.com",
  //   databaseURL: "https://cproject-9bb5f.firebaseio.com",
  //   projectId: "cproject-9bb5f",
  //   storageBucket: "cproject-9bb5f.appspot.com",
  //   messagingSenderId: "926906729227"
  // }
  // firebase.initializeApp(config);

  // firebase.auth().onAuthStateChanged(user => {

  //   if (user) {
  //     window.location.href = '/profilepage.html';
  //   }
  //   else {

  //   }
  // });

  // var btnSignup = document.getElementById('btnSignup');
  // var txtEmail = document.getElementById('txtEmail');
  // var txtPassword = document.getElementById('txtPassword');

  // Registration-btnSignup
  // btnSignup.addEventListener('click', function (e) {
  //   var email = txtEmail.value;
  //   var password = txtPassword.value;
  //   var auth = firebase.auth();
  //   const fName = document.getElementById('fname').value;
  //   const lName = document.getElementById('lname').value;
  //   const phoneNumber = document.getElementById('phoneNumber').value;
  //   //const fs = new firebase.firestore.Firestore;
  //   console.log("fName:", fName);
  //   console.log("lName:", lName);
  //   console.log("phoneNumber:", phoneNumber);
  //   auth.createUserWithEmailAndPassword(email, password).then(async(userAuth) => {
  //       const {
  //         user
  //       } = userAuth;
  //       const {
  //         uid
  //       } = user;
  //       //localStorage.setItem("currentUserUID", JSON.stringify({uid: user.user.uid}));
  //        

//       // get 4 random recipes
  //       console.log('getting random recipes...');
  //       const randomRecipeIds = await getRandomRecipeIds(4);
  //       console.log('got random recipes:', randomRecipeIds);
  
//       //firebase.firestore().collection("users").add({
  //       firebase.firestore().collection("users").doc(uid).set({
  //         "email": email || "",
  //         "firstname": fName || "",
  //         "lastname": lName || "",
  //         "phone": phoneNumber || "",
  //         "userUID": user.uid,
  //         recipes: randomRecipeIds
  //       }).then(() => {
  //         //localStorage.setItem("currentUserUID", JSON.stringify({uid: uid}));
  //          
  //         window.location.href = '/profilepage.html';
//       }).catch(console.error);
  //       console.log("user:", user);
  //     })
  //     .catch(console.error);
  // });
  
  
// Login on the home page

  // var txtLoginEmail = document.getElementById('txtLoginEmail');
// var txtLoginPassword = document.getElementById('txtLoginPassword');
  
  // var txtLoginEmail2 = document.getElementById('txtLoginEmail2');
// var txtLoginPassword2 = document.getElementById('txtLoginPassword2');
  
  // var btnForgotPassword = document.getElementById('btnForgotPassword');
// btnForgotPassword.addEventListener('clic k', function(e){        
  //   var auth = firebase.auth();
  //   auth.sendPasswordResetEmail();
  // })
  
  
// Login
// var btnLogin = document.getElementById('btnLogin');
  // var txtLoginEmail = document.getElementById('txtLoginEmail');
  // var txtLoginPassword = document.getElementById('txtLoginPassword');
  
  // btnLogin.addEventListener('click', async function (e) {
//   e.preventDefault();
  //   //var email = txtLoginEmail.value;      
  //   //var password = txtLoginPassworlue;
  //   // const authResult = await signIn();
    
  //   // window.location.href = '/profilepage.html';
 });
  
  // join
// $('.join').on('click', function (event) {
  //   event.preventDefault();
  //   window.scrollTo(0, $('#register').offset().top - 70);
  //   return false;
  // });

  // Slider
  if(window.Swiper) {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    });
  }
  
  // Opens curtains
$('.learn-more').on('click', openCurtains);

function openCurtains () {
  // Add class to open the curtain with CSS
  //$('.curtain footer').fadeOut(function () {
  //});
  $('body').addClass('loaded');

  // Removes the curtain after 1 second
  setTimeout(function () {
    $('.curtain').remove();
  }, 1000);
}

function checkLogIn () {
  console.log('checking log in');
}

function isLoggedIn() {
  return Boolean(localStorage.getItem('uid'));
}

/*checkLogIn().then(function(user) {
  console.log(user)
  if(!user.exist) {
    $('.not-logged-in').show();
  }
});*/

function createMobileMenu() {
  var navLinks = $('.navigation-links');
  var dropdownMenu = $('<div class="mobile-dropdown"><button>My Menu (Open)</button></div>');
  var menuLinks = $('<div class="menu-links"></div>');

  dropdownMenu.find('button').on('click', function() {
    dropdownMenu.toggleClass('opened');
  });

  navLinks.find('a').each(function() {
    var link = $(this).clone();
    menuLinks.append(link);
  });
  
  // Appends menus
  dropdownMenu.append(menuLinks);
  navLinks.append(dropdownMenu);
}

createMobileMenu();

$('.navigation-links a').on('click', function(event) {
  const href = $(this).attr('href').match(/profilepage.html#(.*)/);
  console.log(href)
  if(href) {
    console.log(href)
    navigationClicked(href[1], event);
  }
});

function navigationClicked(href, event) {
  const $container = $('.profile-bodyContainer-' + href);
  
  if(!$container.length) return;

  $('.profile-bodyContainer').hide();
  $container.css('display', 'flex');
  event && event.preventDefault();

  if (href === 'profile') {
    $('.calendar-email').hide();
    $('#skills-form-container').show();
  } else {
    $('.calendar-email').show();
    $('#skills-form-container').hide();
  }

  // Changes bottom container background
  $('.images-bottom-container .flex').css('background', $container.find('.main-grid').css('background'));
}

const { hash } = window.location;

if(hash) {
  navigationClicked(hash.replace('#', ''));
}

$('a.home').on('click', function(event) {
  event.preventDefault();
  var notLoggedInMessage = 'You are not logged in!';

  if(!isLoggedIn()) {
    return alert(notLoggedInMessage);
  }

  // Logged in user. Go to profilepage.
  window.location = 'profilepage.html';
});

$('a:not(".login")').on('click', function(event) {
  var link = $(this).attr('href');

  if(link.match('index')) {
    event.preventDefault();
    window.location = link + '?visited=true';
  }
});

// Index auto-open
function autoOpen() {
  if(isLoggedIn() || window.location.search.match('visited=true')) {
    openCurtains();
  }
}

autoOpen();