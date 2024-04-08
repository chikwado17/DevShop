import { Watch } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      (
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{ margin: "350px auto" }}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
