import React from "react";
import HomepageBlurb from "../../components/HomepageBlurb/HomepageBlurb.jsx";

export default function HomePage({setUser}) {
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
        <HomepageBlurb setUser={setUser} />
      </div>
    </div>
  );
}
