import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer font-small footer pt-4 footer-dark bg-dark">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">MOON LIGHT</h5>
            <p>
              Moonlight consists of mostly sunlight (with little earthlight)
              reflected from the parts of the Moon's surface where the Sun's
              light strikes.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">πΎπππππ</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">FΞαΞ£BΣ¨Σ¨K</a>
              </li>
              <li>
                <a href="#!">IΠΖ§Ζ¬ΞGΠ―ΞM</a>
              </li>
              <li>
                <a href="#!">β wΓ―β β Γͺr</a>
              </li>
              <li>
                <a href="#!">Snapchat</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">βα΅£βfβββα΅’ββββ</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">ππππππ ππ</a>
              </li>
              <li>
                <a href="#!">οΌ§ο½ο½ οΌ¨ο½ο½</a>
              </li>
              <li>
                <a href="#!">π²π°πππ΄π</a>
              </li>
              <li>
                <a href="#!">α΄Ία΅α΅α΅Κ³β±.αΆα΅α΅</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        Β© 2020 Copyright:
        <a href="https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=32&ab_channel=Codevolution">
          {" "}
          Moonlight.com
        </a>
      </div>
    </footer>
  );
}
