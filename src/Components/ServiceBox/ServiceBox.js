import React, { Component } from "react";
import "./ServiceBox.scss";

class ServiceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false
    };
  }
  render() {
    return (
      <a
        onClick={() => this.props.serviceHandler(this.props.data.mainTitle)}
        className="lifeBox"
        href={this.props.link}
      >
        <img
          className="boxImg"
          src={this.props.data.subImg}
          alt="미소 홈 서비스 이미지"
        />
        <div className="textWrap">
          <div className="mainTitle">{this.props.data.mainTitle}</div>
          <div className="subTitle">{this.props.data.subTitle}</div>
        </div>
      </a>
    );
  }
}
export default ServiceBox;

// import React from "react";
// import "./ServiceBox.scss";

// class ServiceBox {
//   return (
//     <a
//       onClick={() => props.serviceHandler(props.data.mainTitle)}
//       className="lifeBox"
//       href={props.link}
//     >
//       <img
//         className="boxImg"
//         src={props.data.subImg}
//         alt="미소 홈 서비스 이미지"
//       />
//       <div className="textWrap">
//         <div className="mainTitle">{props.data.mainTitle}</div>
//         <div className="subTitle">{props.data.subTitle}</div>
//       </div>
//     </a>
//   );
// }
// export default ServiceBox;
