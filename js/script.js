gsap.registerPlugin(ScrollTrigger);

let isMobile = window.matchMedia("(max-width: 460px)");
let headerTL = gsap.timeline();

gsap.set("body", { overflow: "hidden" });

if (!isMobile.matches) {
  headerTL
    .set(".menu__item", { opacity: 0, yPercent: 100 })
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
  headerTL
    .set(".header__menu", {
      opacity: 0,
      display: "none",
      padding: "0px",
      xPercent: 300,
    })
    .set("body", { overflow: "hidden" })
    .set(".menu__item", { opacity: 0, yPercent: 100 })
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
let isMobileold = isMobile.matches;
headerTL.set("body", { overflow: "visible" });
window.addEventListener("resize", () => {
  if (isMobileold != isMobile.matches) {
    isMobileold = isMobile.matches;
    if (!isMobile.matches) {
      headerTL
        .set(
          ".header__menu",
          {
            height: " calc(40px + (56 - 40) * ((100vw - 375px) / (768 - 375)))",
            background: "#000",
            padding: "5px",
            justifyContent: "center",
          },
          "-=0.4"
        )
        .set(".header__list", {
          width: "100%",
        })
        .set("body", { overflow: "hidden" })
        .set(".menu__item", { opacity: 0, yPercent: 100 })
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
          {
            opacity: 1,
            duration: 0.4,
            yPercent: 0,
            ease: "ease",
            stagger: 0.1,
          },
          "-=0.6"
        ).set("body", { overflow: "visible" });
    }
    if (isMobile.matches) {
      headerTL
        .set(".header__menu", {
          opacity: 0,
          height: "calc(40px + (56 - 40) * ((100vw - 375px) / (768 - 375)))",
          background: "transparent",
          justifyContent: "flex-end",
          display: "none",
          padding: "0px",
          xPercent: 50,
        })
        .set("body", { overflow: "hidden" })
        .set(".menu__item", { opacity: 0, yPercent: 100 })
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
            opacity: 1,
            ease: "back.out",
            duration: 0.4,
          },
          "-=0.4"
        ).set("body", { overflow: "visible" });
    }
  }
});
