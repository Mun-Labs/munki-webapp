import "./StickyTest.css";

export const StickyTest = () => {
  return (
    <div className="sticky-container">
      <div className="section">Section 1</div>
      <div className="section" style={{ height: "100vh" }}>
        Section 2
        <div className="child-container">
          <div className="child">Child</div>
        </div>
        <div className="child-bottom">bottom</div>
      </div>
      <div className="section">Section 3</div>
    </div>
  );
};
