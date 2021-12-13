import FooterWidgetCustomerSupport from '../../../components/footer-widgets/footer-widget-customer-support';
import FooterWidgetList from '../../../components/footer-widgets/footer-widget-list';
import FooterWidgetLocation from '../../../components/footer-widgets/footer-widget-location';
import { footerWidgetAbout, footerWidgetCategories, footerWidgetCustomerCare, footerWidgetCustomerSupport, footerWidgetStoreLocations } from '../../../mocks/footer-widgets';
import FooterBottom1 from './footer-bottom1';

function Footer1(): JSX.Element{
  return (
    <footer id="mad-footer" className="mad-footer">
      {/* <!--================ Footer row ================--> */}
      <div className="mad-footer-main">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-4">
              <FooterWidgetList list={footerWidgetAbout} />
              {/* <!--================ End of Widget ================--> */}
            </div>
            <div className="col-xl-2 col-md-4">
              {/* <!--================ Widget ================--> */}
              <FooterWidgetList list={footerWidgetCategories} />
              {/* <!--================ End of Widget ================--> */}
            </div>
            <div className="col-xl-2 col-md-4">
              {/* <!--================ Widget ================--> */}
              <FooterWidgetList list={footerWidgetCustomerCare} />
              {/* <!--================ End of Widget ================--> */}
            </div>
            <div className="col-xl-2 col-md-6">
              {/* <!--================ Widget ================--> */}
              <FooterWidgetLocation widget={footerWidgetStoreLocations} />
              {/* <!--================ End of Widget ================--> */}
            </div>
            <div className="col-xl-4 col-md-6">
              {/* <!--================ Widget ================--> */}
              <FooterWidgetCustomerSupport widget={footerWidgetCustomerSupport} />

              {/* <!--================ End of Widget ================--> */}
            </div>
          </div>
          <FooterBottom1/>
        </div>
      </div>
      {/* <!--================ End of Footer row ================--> */}
    </footer>
  );
}

export default Footer1;
