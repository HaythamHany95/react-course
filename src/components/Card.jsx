/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({
  title,
  subtitle,
  buttonText,
  cardBackground = "bg-gray-100",
  buttonBackground = "bg-black",
}) => {
  return (
    <div className={`${cardBackground} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">
        {subtitle}
        {/* Browse our React jobs and start your career today */}
      </p>
      <Link
        to="/jobs"
        className={`inline-block ${buttonBackground} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default Card;
