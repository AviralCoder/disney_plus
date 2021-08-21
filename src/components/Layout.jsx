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

export class Flexbox extends React.Component {
    render() {
        return (
            <div className={"flexbox__"} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export class Grid extends React.Component {
    render() {
        return (
            <div className="grid" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export class Container extends React.Component {
    render() {
        return <div className="container">{this.props.children}</div>;
    }
}
