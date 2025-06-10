
// const showMenu = (toggleId, menuId) =>{
//     const toggle = document.getElementById(toggleId),
//         menu = document.getElementById(menuId)

// toggle.addEventListener('click', () =>{
//        // Add show-menu class to nav menu
//     menu.classList.toggle('show-menu')

//        // Add show-icon to show and hide the menu icon
//     toggle.classList.toggle('show-icon')
// })
// }


//     showMenu('nav-toggle','menu-links')

const showMenu = (toggleId, menuId) => {
  const toggle = document.getElementById(toggleId),
        menu = document.getElementById(menuId),
        body = document.body,
        links = menu.querySelectorAll('a');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    toggle.classList.toggle('show-icon');
    body.classList.toggle('menu-open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show-menu');
      toggle.classList.remove('show-icon');
      body.classList.remove('menu-open');
    });
  });
};

showMenu('nav-toggle', 'menu-links');

