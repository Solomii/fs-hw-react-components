import React, { Component } from "react";
import CiaoButton  from "../CiaoButton";

class Ciao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHi: true,
        };
    }

    handleBtnSwitch = () => {
        const { isHi } = this.state;
        this.setState({ isHi: !isHi });
    };

    render() {
        const { isHi } = this.state;
        const { classStyle, name, id } = this.props;

        return (
            <div className={classStyle}>
                <h2>
                    id:{id}
                    <br></br>
                    {isHi ? "Hi" : "Bye"} {name ?? "anonim"}{" "}
                </h2>
                <CiaoButton onClick={this.handleBtnSwitch} direction={isHi ? "hi" : "bye"} />
            </div>
        );
    }
}

export default Ciao;
