import "./MunkiFooter.css";

const footerStyle: React.CSSProperties = {
  height: "50px",
};

export const MunkiFooter = () => {
  return (
    <section className="footer" style={footerStyle}>
      Sticky Footer
    </section>
  );
};
