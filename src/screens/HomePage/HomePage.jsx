import React from "react";
import HomepageBlurb from "../../components/HomepageBlurb/HomepageBlurb.jsx";

export default function HomePage() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${require("../../assets/main.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <HomepageBlurb />
      </div>
    </div>
  );
}
