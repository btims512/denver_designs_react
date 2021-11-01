import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "/Users/Ben/Desktop/project_files/denver_designs_react/src/Components/ScrolMag/ScrolMagStyles.scss";

const ScrolMag = () => {
  var windowSize = $(window).width();

  $(window).resize(function () {
    windowSize = $(window).width();
  });

  if (windowSize > 767) {
    var controller = new ScrollMagic.Controller();

    var zoomHeader = TweenMax.to("#header", 0.5, {
      scale: 22,
      ease: Circ.EaseIn,
    });

    var zoomOne = TweenMax.to("#one", 0.5, { scale: 100, ease: Circ.EaseIn });
    var zoomTwo = TweenMax.to("#two", 0.5, { scale: 100, ease: Circ.EaseIn });
    var zoomThree = TweenMax.to("#three", 0.5, {
      scale: 100,
      ease: Circ.EaseIn,
    });
    var zoomFour = TweenMax.to("#four", 0.5, { scale: 6, ease: Circ.EaseIn });

    var headerZoom = new ScrollMagic.Scene({
      triggerElement: "#header",
      triggerHook: 0,
      duration: "300%",
    })
      .setPin("#header")
      .setClassToggle("#header", "showing")
      .setTween(zoomHeader)
      // .addIndicators({name: 'header zoom'})
      .addTo(controller);

    var sceneOneZoom = new ScrollMagic.Scene({
      triggerElement: "#one",
      triggerHook: 0,
      duration: "300%",
    })
      .setPin("#one")
      .setClassToggle("#one", "showing")
      .setTween(zoomOne)
      // .addIndicators({name: 'Scene 1 zoom'})
      .addTo(controller);

    var sceneTwoZoom = new ScrollMagic.Scene({
      triggerElement: "#two",
      triggerHook: 0,
      duration: "300%",
    })
      .setPin("#two")
      .setClassToggle("#two", "showing")
      .setTween(zoomTwo)
      // .addIndicators({name: 'Scene 2 zoom', indent: 400})
      .addTo(controller);

    var sceneThreeZoom = new ScrollMagic.Scene({
      triggerElement: "#three",
      triggerHook: 0,
      duration: "300%",
    })
      .setPin("#three")
      .setClassToggle("#three", "showing")
      .setTween(zoomThree)
      // .addIndicators({name: 'Scene 3 zoom', indent: 800})
      .addTo(controller);

    var sceneFourZoom = new ScrollMagic.Scene({
      triggerElement: "#four",
      triggerHook: 0,
      duration: "100%",
    })
      .setPin("#four")
      .setClassToggle("#four", "showing")
      .setTween(zoomFour)
      //.addIndicators({name: 'Scene 4 zoom'})
      .addTo(controller);
  }

  var documentHeight = document.body.clientHeight;
  var windowHeight = $(window).height() * 1.5;
  var bottomPoint = documentHeight - windowHeight;

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > bottomPoint) {
      $("#four a").addClass("email-showing");
    } else {
      $("#four a").removeClass("email-showing");
    }
  });

  const ScrolMag = React.createClass({
    render: function () {
      return (
        <div>
          <header id="header" className="showing">
            <h1>
              <span className="name">Laura Salgado</span>{" "}
              <span className="title">Front-end Developer</span>
            </h1>
          </header>
          <main>
            <ul>
              <li id="one">
                <a href="https://codepen.io/lauraculham/" target="_blank">
                  Codepen
                </a>
              </li>
              <li id="two">
                <a href="#" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li id="three">
                <a href="#" target="_blank">
                  Twitter
                </a>
              </li>
              <li id="four">
                <a href="#">
                  culham.laura
                  <span>
                    @gmail.com
                    <span />
                  </span>
                </a>
              </li>
            </ul>
          </main>
        </div>
      );
    },
  });
};

export default ScrolMag;
