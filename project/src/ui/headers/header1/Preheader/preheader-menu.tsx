function PreheaderMenu(): JSX.Element{
  return (
    <div className="mad-quick-links">
      <a href="pages_about_v1.html" className="mad-link">
                  About
      </a>{' '}
      <span>&nbsp;|&nbsp;</span>{' '}
      <a href="#" className="mad-link">
                  FAQ
      </a>
      <span>&nbsp;|&nbsp;</span>{' '}
      <a href="pages_contact_v1.html" className="mad-link">
                  Contact
      </a>
    </div>
  );
}

export default PreheaderMenu;
