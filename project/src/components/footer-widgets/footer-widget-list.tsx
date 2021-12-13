import { Link } from 'react-router-dom';
import { FooterWidgetListType } from '../../types/footer-widgets';

type FooterWidgetProps = {
  list:FooterWidgetListType,
}

function FooterWidgetList({list:{title, widgetList}}:FooterWidgetProps): JSX.Element{
  return (
    <section className="mad-widget">
      <h6 className="mad-widget-title">{title}</h6>
      <div className="mad-vr-list">
        <ul>
          {
            widgetList.map(({ name, link }) => (
              <li key={name}><Link to={link} className="mad-link">{name}</Link></li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
export default FooterWidgetList;
