import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`bg-[#383838] text-white font-[Poppins] py-2 px-6 rounded hover:text-black hover:bg-orange-300 
    duration-500 `}
    >
      {props.children}
    </button>
  );
};

// Defining propTypes
Button.propTypes = {
  children: PropTypes.string.isRequired,
};
// Defining propTypes

export default Button;
