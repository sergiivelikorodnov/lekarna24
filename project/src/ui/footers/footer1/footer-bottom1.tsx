import { Link } from 'react-router-dom';

function FooterBottom1(): JSX.Element{
  return (
    <div className="mad-footer-bottom">
      <p className="copyrights">Copyright © 2022 <Link to="/">Lekarna24 </Link>. All Rights Reserved.</p>
      <Link to="/"><img src="images/payment.png" alt="" /></Link>
    </div>
  );
}

export default FooterBottom1;
