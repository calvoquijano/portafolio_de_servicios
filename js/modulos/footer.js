let datosFooter = {
  waURL: 'href="https://wa.me/573005465840" target="_blank"',
  mailURL: 'href="mailto:calvo@calvoquijano.com" target="_blank"',
  cvURL: "https://portafolio.calvoquijano.com/descargable/CV-Andres-Quijano.pdf",
};
const cambiarFooter = document.querySelector("footer");
cambiarFooter.innerHTML += `
  <div>
    <a class="footer-link m-2" ${datosFooter.waURL}><i class="ico-wa"></i> +57 300 546 5840</a>
    <a class="footer-link m-2" ${datosFooter.mailURL}><i class="ico-mail"></i> calvo@calvoquijano.com</a>
  </div>
  <button type="button" class="btn btn-general btn-violeta m-3 m-md-0" onclick="window.open('${datosFooter.cvURL}','_blank');">
    Descargar CV <i class="ico-descarga"></i>
  </button>
  `;
export { cambiarFooter, datosFooter };
