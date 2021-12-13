import { Link } from 'react-router-dom';
import { FooterWidgetSocialIconsType } from '../../types/footer-widgets';

type FooterWidgetProps = {
  widget:FooterWidgetSocialIconsType[],
}

function FooterWidgetSocialIcons({widget}:FooterWidgetProps): JSX.Element{
  return (
    <div className="mad-social-icons">
      <ul>
        {
          widget.map(({link, icon}) => (
            <li key={icon}><Link to={link}><i className={`fab fa-${icon}`}></i></Link></li>
          ))
        }
      </ul>
    </div>
  );
}
export default FooterWidgetSocialIcons;
