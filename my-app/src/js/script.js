const header = () => {
  let navbarDiv = document.querySelector(".Navbar");
  let navbarlink = document.querySelector(".nav-item");
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      navbarDiv.classList.add("navbar-cng");
    } else {
      navbarDiv.classList.remove("navbar-cng");
    }
  });
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      navbarlink.classList.add("navbar-cnd");
    } else {
      navbarlink.classList.remove("navbar-cnd");
    }
  });
  const navbarCollapseDiv = document.getElementById("navbar-collapse");
  const navbarShowBtn = document.getElementById("navbar-show-btn");
  const navbarCloseBtn = document.getElementById("navbar-close-btn");
  navbarShowBtn.addEventListener("click", () => {
    navbarCollapseDiv.classList.add("navbar-collapse-rmw");
  });

  navbarCloseBtn.addEventListener("click", () => {
    navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
  });
  document.addEventListener("click", (e) => {
    if (
      e.target.id !== "navbar-collapse" &&
      e.target.id !== "navbar-show-btn" &&
      e.target.parentElement.id != "navbar-show-btn"
    ) {
      navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
    }
  });

  //   stop animations
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
};
export default header;
