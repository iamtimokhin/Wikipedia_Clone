const onScroll = ({ scrollTop }) => {
  return (
    <>
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </>
  );
};

export default onScroll;
