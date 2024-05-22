import PropTypes from "prop-types";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="font-semibold mb-8">{title}</h1>
      <div className="flex flex-col gap-2">
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-gray-600 hover:text-orange-300 duration-300
            text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </div>
    </ul>
  );
};

// Defining propTypes
Item.propTypes = {
  Links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
// Defining propTypes

export default Item;
