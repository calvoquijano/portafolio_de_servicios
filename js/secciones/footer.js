let datosFooter = {
  logoURL: "images/logo/logotipo_calvo.svg",
  indexURL: "index.html",
  trabajoURLUX: "ux-ui.html",
  trabajoURLWeb: "web.html",
  trabajoURLAni: "animacion-2d.html",
  trabajoURLOtros: "otros.html",
  quienSoyURL: "quien-soy.html",
  calamar:
    '<a class="nav-link p-2" href="#"><img src="images/icons/calamar.svg" alt="Calamar Creativo"/></a>',
  camaramantis:
    '<a class="nav-link p-2" href="https://www.youtube.com/channel/UCqT90Rw3GaHw7MMPeggKABw" target="_blank"><img src="images/icons/mantis.svg" alt="Cámaramantis"/></a>',
  linkedin:
    '<a class="nav-link p-2" href="https://www.linkedin.com/in/andresdavidquijano/" target="_blank"><img src="images/icons/linkedin.svg" alt="LinkedIn Andrés Quijano"/></a>',
  behance:
    '<a class="nav-link p-2" href="https://www.behance.net/calvoquijano" target="_blank"><img src="images/icons/behance.svg" alt="Behance Andrés Quijano"/></a>',
  github:
    '<a class="nav-link p-2" href="https://github.com/calvoquijano" target="_blank"><img src="images/icons/simple-icons_github.svg" alt="GitHub Andrés Quijano"/></a>',
};
const cambiarFooter = document.querySelector("nav");
cambiarMenu.innerHTML += `
  
      <div class="container-fluid">
        <a class="navbar-brand" href="${datosMenu.indexURL}"
          ><img src="${datosMenu.logoURL}"
        /></a>
        <button
          class="navbar-toggler menu-hamburguesa"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav col-lg-6 d-flex justify-content-around">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle btn btn-general btn-menu-nav mb-2 mb-lg-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lo que hago
              </a>
              <ul class="dropdown-menu dropdown-nav-submenu">
                <li>
                  <a class="dropdown-item btn btn-general btn-menu-nav" href="${datosMenu.trabajoURLUX}"
                    >UX | UI</a
                  >
                </li>
                <li>
                  <a class="dropdown-item btn btn-general btn-menu-nav" href="${datosMenu.trabajoURLWeb}"
                    >Desarrollador Web</a
                  >
                </li>
                <li>
                  <a class="dropdown-item btn btn-general btn-menu-nav" href="${datosMenu.trabajoURLAni}"
                    >Animador 2D</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a
                    class="dropdown-item btn btn-general btn-menu-nav mb-2 mb-lg-0"
                    href="${datosMenu.trabajoURLOtros}"
                    >¿Qué más hago?</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <a class="nav-link btn btn-general btn-menu-nav" href="${datosMenu.quienSoyURL}"
                >Quien soy</a
              >
            </li>
            <li class="nav-item mb-2 mb-lg-0">
              <a class="nav-link btn btn-general btn-menu-nav" href="#"
                >BlogeRino</a
              >
            </li>
          </ul>
          <div class="d-flex justify-content-around col-lg-6">
            ${datosMenu.calamar}
            ${datosMenu.camaramantis}
            ${datosMenu.linkedin}
            ${datosMenu.behance}
            ${datosMenu.github}
          </div>
        </div>
      </div>
  `;
export { cambiarMenu, datosMenu };
