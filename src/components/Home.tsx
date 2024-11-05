const MathJax = require("react-mathjax");

export const Home = () => {
  const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`;
  return (
    <>
      <h1>Welcome!</h1>
      <p style={{ fontSize: "30px" }}>
        This website is a selection of useful widgets to use with Mathematics
        classes. As time goes on the collection will grow!
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p style={{ fontSize: "30px" }}>
        Feedback is welcome at: <u>pi.and.seek@gmail.com</u>
      </p>
    </>
  );
};
