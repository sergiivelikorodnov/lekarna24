import { footerWidgetSocialIcons } from '../../mocks/footer-widgets';
import { FooterWidgetCustomerSupportType } from '../../types/footer-widgets';
import FooterWidgetSocialIcons from './footer-widget-social-icons';

type FooterWidgetProps = {
  widget:FooterWidgetCustomerSupportType,
}

function FooterWidgetCustomerSupport({widget:{title, info}}:FooterWidgetProps): JSX.Element{
  return (
    <section className="mad-widget">
      <h6 className="mad-widget-title">{title}</h6>
      {/* <!--================ Icon Boxes ================--> */}
      <div className="mad-icon-boxes our-info item-col-1">
        {
          info.map(({ description, icon, title:iconTitle}) => (
            <div className="mad-col" key={description}>
              {/* <!--================ Icon Box ================--> */}
              <article className="mad-icon-box">
                <i className="mad-icon-box-icon"><img className="svg" src={`lekarna_svg_icons/${icon}.svg`} alt={iconTitle} /></i>
                <div className="mad-icon-box-content">
                  <span className="mad-icon-sub-title">{description}</span>
                  <h4 className="mad-icon-box-title">{iconTitle}</h4>
                </div>
              </article>
              {/* <!--================ End of Icon Box ================--> */}
            </div>

          ))
        }
      </div>
      {/* <!--================ End of Icon Boxes ================--> */}
      <FooterWidgetSocialIcons widget={footerWidgetSocialIcons}/>
    </section>
  );
}
export default FooterWidgetCustomerSupport;
