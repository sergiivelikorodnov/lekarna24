import { iconBoxes4 } from '../../mocks/icon-boxes';
import IconBox from './icon-box';


function IconBoxes4Style3Size2(): JSX.Element {
  return (
    <article className="mad-section very-small-size">
      <div className="mad-icon-boxes style-3 size-2 hr-type item-col-4">
        {iconBoxes4.map((value) => (
          <IconBox key={value.title} title={value.title} icon={value.icon} description={value.description}/>
        ))}
      </div>
    </article>
  );
}

export default IconBoxes4Style3Size2;
