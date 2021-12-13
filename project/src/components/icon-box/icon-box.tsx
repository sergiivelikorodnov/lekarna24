import { IconBoxType } from '../../types/icon-box-type';

function IconBox({icon, title, description}:IconBoxType): JSX.Element {
  return (
    <div className="mad-col">
      <article className="mad-icon-box">
        <i className="mad-icon-box-icon"><img className="svg" src={`lekarna_svg_icons/${icon}.svg`} alt={title} /></i>
        <div className="mad-icon-box-content">
          <h6 className="mad-icon-box-title">{title}</h6>
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
}

export default IconBox;
