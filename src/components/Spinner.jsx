/* eslint-disable react/prop-types */
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3B82F6" loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
