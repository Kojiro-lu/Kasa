import "./Tags.scss";

function Tags({ tags }) {
  return (
    <div className="tags-container">
      <ul className="tags-container__liste">
        {tags.map((tag, index) => (
          <li className="tags-container__liste__li" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
