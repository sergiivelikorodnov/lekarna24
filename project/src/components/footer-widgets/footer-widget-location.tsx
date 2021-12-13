import { Link } from 'react-router-dom';
import { FooterWidgetLocationType } from '../../types/footer-widgets';

type FooterWidgetProps = {
  widget:FooterWidgetLocationType,
}

function FooterWidgetLocation({widget:{title, locations}}:FooterWidgetProps): JSX.Element{
  return (
    <section className="mad-widget">
      <h6 className="mad-widget-title">{title}</h6>
      <div className="mad-our-info">
        {
          locations.map(({ description, button, link }) => (
            <div key={description} className="mad-info">
              <div>{description}
              </div>
              <Link to={link} className="mad-link">{button}</Link>
            </div>
          ))
        }
      </div>
    </section>
  );
}
export default FooterWidgetLocation;
