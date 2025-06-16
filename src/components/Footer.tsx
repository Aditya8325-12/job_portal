function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-base-300  ">
      {/* <div className="w-10/12"> */}
      <footer className="w-10/12 footer sm:footer-horizontal  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Profile Management</a>
          <a className="link link-hover">Resume Database</a>
          <a className="link link-hover">Job Listings</a>
          <a className="link link-hover">Application Management</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      {/* </div> */}
    </div>
  );
}

export default Footer;
