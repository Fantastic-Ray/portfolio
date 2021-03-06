import React, { Component } from "react";
import gitLogo from "../images/GitHub.png";
import linkedLogo from "../images/linkedin.png";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{ marginTop: "30px" }}>
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-12">
              <div>
                <a
                  href="https://github.com/Fantastic-Ray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={gitLogo}
                    alt="pgyuggutvu"
                    width="50px"
                    style={{ margin: "30px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/guruigang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedLogo}
                    alt="LinkedIn"
                    width="50px"
                    style={{ margin: "30px" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-12">@2018 Ruigang Gu</div>
          </div>
        </div>
      </footer>
    );
  }
}
