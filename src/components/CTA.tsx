import { Fade } from "react-awesome-reveal";

const CTA = (): JSX.Element => {
  return (
    <section id="CTA">
      <div id="CTA__container">
        <div className="row">
          <div className="col-md-6">
            <Fade direction="left">
              <div className="section-header">
                <div className="title">
                  <h2>OpenType feature and Variable fonts</h2>
                </div>
                <div className="button">
                  <button className="btn">Try For Free</button>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-6 d-none d-md-flex">
            <Fade direction="right">
              <div className="section-cover">
                <img src="/CTA-img.png" alt="" />
              </div>
            </Fade>
          </div>
          <div className="col-md-6 mt-5">
            <Fade direction="right">
              <div className="section-cover d-md-none">
                <img src="/CTA-2.png" alt="" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
