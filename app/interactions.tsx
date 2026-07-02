import Script from "next/script";

export function Interactions() {
  return (
    <Script id="melo-interactions" strategy="afterInteractive">
      {`
        (() => {
          const menuButton = document.querySelector(".nav-toggle");
          const menu = document.querySelector(".main-nav");
          const header = document.querySelector(".site-header");

          if (menuButton && menu) {
            menuButton.addEventListener("click", () => {
              const isOpen = menu.classList.toggle("is-open");
              menuButton.classList.toggle("is-open", isOpen);
              menuButton.setAttribute("aria-expanded", String(isOpen));
              document.body.classList.toggle("menu-open", isOpen);
            });

            menu.querySelectorAll("a").forEach((link) => {
              link.addEventListener("click", () => {
                menu.classList.remove("is-open");
                menuButton.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
              });
            });
          }

          if (header) {
            const updateHeader = () => {
              header.classList.toggle("is-scrolled", window.scrollY > 12);
            };

            updateHeader();
            window.addEventListener("scroll", updateHeader, { passive: true });
          }

          const revealTargets = document.querySelectorAll(".reveal");

          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                  }
                });
              },
              { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
            );

            revealTargets.forEach((target, index) => {
              target.style.transitionDelay = Math.min(index * 35, 240) + "ms";
              observer.observe(target);
            });
          } else {
            revealTargets.forEach((target) => target.classList.add("is-visible"));
          }

          const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
          const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          if (canHover && !prefersReducedMotion) {
            document.querySelectorAll("[data-tilt-card]").forEach((card) => {
              card.addEventListener("mousemove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                card.style.transform = "perspective(900px) rotateX(" + (y * -5) + "deg) rotateY(" + (x * 6) + "deg) translateY(-3px)";
              });

              card.addEventListener("mouseleave", () => {
                card.style.transform = "";
              });
            });
          }
        })();
      `}
    </Script>
  );
}
