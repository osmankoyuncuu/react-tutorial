import loadingImg from "../img/loading.gif";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loading h-100">
      <img src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
