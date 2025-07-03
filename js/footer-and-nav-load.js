const phoneNumber = "923179933007";
const booking_request_message =
  "Hello, I am interested in booking a room at your hotel. \n" +
  "Could you please share details on availability, pricing, and current offers? \n" +
  "I also came across your room listings here: https://usman-far00q.github.io/Summit-Hotel-F.E/pages/rooms.html \n" +
  "Looking forward to hearing from you. Thank you! \n";

function add_event_listners() {
  book_now_btn_ids = ["book-now-btn", "book-now-nav-btn"];
  book_now_btn_ids.forEach((id) => {
    let button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", function () {
        const encodedMessage = encodeURIComponent(booking_request_message);

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const url = isMobile
          ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
          : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(url, "_blank");
      });
    }
  });
}

// FETCHING GENERIC NAVBAR AND FOOTER AND INJECTING INTO HTML BODY
fetch("../pages/generic/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar-placeholder").innerHTML = html;
    // ADDING GENERIC EVENT LISTNERS
    add_event_listners();
  });
fetch("../pages/generic/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;
  });
