import IconBoxes4Style3Size2 from '../../components/icon-box/icon-boxes-4-type1';
import Header1 from '../../ui/headers/header1/header1';

function Home1(): JSX.Element {
  return (
    <div id="mad-page-wrapper" className="mad-page-wrapper">
      <Header1/>
      <div className="mad-content no-pd">
        <div className="container">
          <IconBoxes4Style3Size2/>
        </div>
      </div>
    </div>

  );
}

export default Home1;
