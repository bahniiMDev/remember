gsap.registerPlugin(ScrollTrigger);

let isMobile = window.matchMedia("(max-Width: 460px)");
let headerTL = gsap.timeline();

if (!isMobile.matches) {
  gsap.set("body", { overflow: "hidden" });
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  gsap.set(".menu__item", { opacity: 0, yPercent: 100 });

  headerTL
    .from(".header__logo", {
      delay: 1.2,
      duration: 1.2,
      width: "100vw",
      height: "100dvh",
      ease: "back.inOut(1)",
    })
    .from(
      ".header__logo svg path",
      {
        yPercent: function () {
          return Math.random() < 0.5
            ? -(Math.random() * 100 + 200)
            : Math.random() * 100 + 200;
        },
        opacity: 0,
        ease: "back.out(2)",
        stagger: {
          from: "random",
          each: 0.2,
        },
        duration: 0.4,
      },
      "-=2"
    )
    .from(
      ".header__menu",
      {
        duration: 0.8,
        width: 40,
        height: 40,
        ease: "back.out",
        delay: 0.6,
      },
      "-=0.4"
    )
    .from(
      ".header__menu",
      {
        w: 0,
        opacity: 0,
        scale: 0,
        transform: "translatey(-75px)",
        duration: 0.8,
        ease: "back.out",
      },
      "-=1.2"
    )
    .to(
      ".menu__item",
      { opacity: 1, duration: 0.4, yPercent: 0, ease: "ease", stagger: 0.1 },
      "-=0.6"
    );
}
if (isMobile.matches) {
  gsap.set(".header__menu", {
    opacity: 0,
    display: "none",
    padding: "0px",
    xPercent: 300,
  });

  gsap.set("body", { overflow: "hidden" });
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  gsap.set(".menu__item", { opacity: 0, yPercent: 100 });
  headerTL
    .from(".header__logo", {
      delay: 1.2,
      duration: 1.2,
      width: "100vw",
      height: "100dvh",
      ease: "back.inOut(1)",
    })
    .from(
      ".header__logo svg path",
      {
        yPercent: function () {
          return Math.random() < 0.5
            ? -(Math.random() * 100 + 200)
            : Math.random() * 100 + 200;
        },
        opacity: 0,
        ease: "back.out(2)",
        stagger: {
          from: "random",
          each: 0.2,
        },
        duration: 0.4, // додайте тривалість анімації для кожної букви
      },
      "-=2"
    )
    .set(
      ".header__menu",
      {
        display: "flex",
      },
      "-=0.6"
    )
    .to(
      ".header__menu",
      {
        xPercent: 0,
        padding: "5px",
        opacity: 1,
        ease: "back.out",
        duration: 0.4,
      },
      "-=0.4"
    );
}
window.addEventListener("resize", () => {
  if (isMobile.matches) {
    gsap.set(".menu__list", {
      display: "none",
    });
    gsap.set(".header__menu", {
      background: "transparent",
      display: "flex",
      justifyContent: "flex-end",
    });
    gsap.set(".header__menu-animation", {
      display: "flex",
    });
  }
  if (!isMobile.matches) {
    gsap.set(".menu__list", {
      display: "flex",
    });
    gsap.set(".header__menu", {
      background: "#000",
    });
    gsap.set(".menu__item", {
      yPercent: 0,
      opacity: 1,
    });
  }
});
