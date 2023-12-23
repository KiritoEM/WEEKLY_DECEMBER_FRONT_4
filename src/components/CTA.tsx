const CTA = (): JSX.Element => {
  return (
    <section id="CTA">
      <div id="CTA__container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <div className="title">
                <h2>OpenType feature and Variable fonts</h2>
              </div>
              <div className="button">
                <button className="btn">Try For Free</button>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex">
            <div className="section-cover">
              <img src="/CTA-img.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="section-cover d-md-none">
              <img src="/CTA-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
