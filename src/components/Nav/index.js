import React from "react";
import $ from "jquery";

import logo1 from "../../assets/icons/logo/pc-logo1.png";
import logo2 from "../../assets/icons/logo/pc-logo2.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    // $("body").scrollspy({
    //   target: "#mainNav",
    //   offset: navHeight
    // });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  onClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">Patrick</a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-item nav-link active" href="#about">About</a>
              <a className="nav-item nav-link active" href="#experience">Experience</a>
              <a className="nav-item nav-link active" href="#feature">Projects</a>
              <a className="nav-item nav-link active" href="#contact">Contact</a>
              <a className="nav-item btn btn-lg" role="button" data-bs-toggle="modal" data-bs-target="#resumeModal">Resume</a>
            </div>
          </div>
        </div>
      

        <div className="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="resumeModalLabel">Resume</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <embed src="./assets/images/PATRICK_CHEN_RESUME.pdf" type="application/pdf" width="100%" height="100%" />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;