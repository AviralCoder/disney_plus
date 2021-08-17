import React from "react";

export class Center extends React.Component {
    render() {
        return (
            <div
                style={{
                    height: this.props.height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "../assets/images/background.jpg",
                }}
                className={"poster-bg"}
            >
                {this.props.children}
            </div>
        );
    }
}
