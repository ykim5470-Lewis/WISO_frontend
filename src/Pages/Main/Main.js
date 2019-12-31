import React from "react";
import "./Main.scss";
import Line from "../../Components/Line/Line";
import MainSlide from "../../Components/MainSlide/MainSlide";
import Detail from "../../Components/Detail/Detail";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import ServiceData from "../../Components/ServiceBox/ServiceData";
function Main() {
  return (
    <div className="mainContainer">
      <MainSlide />
      <div className="daily">
        <div className="dailyLeft">
          <div className="dailyText">
            일상에 필요한 모든것을 쉽고 간편하게 하여 당신의 일상을 더 좋게
            만들어 나갑니다.
          </div>
          <Detail link={"/Main"} />
        </div>
        <div className="dailyRight">
          <img
            className="dailyDogPhoto"
            src="/images/daily.png"
            alt="강아지와 있는 이미지"
          />
        </div>
      </div>
      <Line />
      <div className="homeServiceWrapper">
        <div className="lifeTitle">
          <div className="lifeText">생활의 모든 것, 미소 홈서비스</div>
          <div className="lifeHiddenWrap">
            <div className="lifeHidden">생활의 모든 것,</div>
            <div className="lifeHidden">미소 홈 서비스</div>
          </div>
        </div>
        <div className="HomeImageWrapper">
          {ServiceData.map((current, index) => (
            <ServiceBox data={current} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Main;
