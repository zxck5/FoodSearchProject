import React from "react";
import GroupCards from "./GroupCards";
// css
import "./css/groupCards.css";
import "./css/footer.css";

export default function AboutUsPage() {
  return (
    <div
      style={{
        height: "85vh",
        margin: "3% 3%",
        borderRadius: "1rem",
        boxShadow: " 5px 5px 15px  #777 ",
        background: "linear-gradient(#e66465, #9198e5)"
      }}
    >
      <h1 style={{ textAlign: "center", padding: "3% 0" }}>
        Group 5 Project for CPAN-144
      </h1>
      <h2 style={{ textAlign: "center" }}>Members</h2>
      <div className="group-cards-container">
        <GroupCards />
      </div>
      <div
        style={{ borderTop: "1px solid white", width: "90%", margin: "0 auto" }}
      ></div>
      <div className="footer">Food Collection</div>
    </div>
  );
}
