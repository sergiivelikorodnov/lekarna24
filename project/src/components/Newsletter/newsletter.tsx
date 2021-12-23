function Newsletter(): JSX.Element{
  return (
    <div className="mad-section no-pd mad-section--stretched mad-colorizer--scheme-color-3">
      <div className="mad-sub-wrap">
        <h5 className="mad-page-title">Get Our Best Deals Straight to Your Inbox!</h5>
        <div className="mad-col">
          <form className="mad-newsletter-form one-line">
            <input type="email" name="email" placeholder="Enter Your Email Address"/>
            <button type="submit" className="btn btn-big btn-style-3"><span>Sign Up</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
