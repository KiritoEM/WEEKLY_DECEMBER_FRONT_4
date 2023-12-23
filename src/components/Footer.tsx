const Footer = (): JSX.Element => {
  const footerTitle = [
    { label: "Fingertipe" },
    { label: "Resources" },
    { label: "About" },
  ];
  return (
    <section id="footer">
      <div className="row gy-5 gy-lg-2">
        {footerTitle.map((item, index) => (
          <div className="col-md-6 col-lg-2" key={index}>
            <div className="footer-link">
              <div className="title">
                <h6>{item.label}</h6>
              </div>
              <div className="link">
                <ul>
                  <li>Home</li>
                  <li>Examples</li>
                  <li>Pricing</li>
                  <li>Updates</li>
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="col-md-6 col-lg-4">
          <div className="contact">
            <div className="adress">
              <div className="icon">
                <img src="/adress.png" alt="" />
              </div>
              <div className="text">
                <p>7480 Mockingbird Hill undefined </p>
              </div>
            </div>
            <div className="phone">
              <div className="icon">
                <img src="/phone.png" alt="" />
              </div>
              <div className="text">
                <p>(239) 555-0108</p>
              </div>
            </div>
            <div className="socialIcons">
                <img src="/social.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
