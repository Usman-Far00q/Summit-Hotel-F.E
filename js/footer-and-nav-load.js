// FETCHING GENERIC NAVBAR AND FOOTER AND INJECTING INTO HTML BODY
fetch("../pages/generic/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar-placeholder").innerHTML = html;
  });
fetch("../pages/generic/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;
  });
