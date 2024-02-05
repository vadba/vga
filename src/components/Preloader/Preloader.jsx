import "./style/style.scss";
const Preloader = () => {
  return (
    <>
      <div className="container-loader">
        <div className="loader">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square last"></div>
          <div className="square clear"></div>
          <div className="square"></div>
          <div className="square last"></div>
          <div className="square clear"></div>
          <div className="square "></div>
          <div className="square last"></div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
