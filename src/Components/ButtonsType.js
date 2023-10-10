import React from "react";
import { FacebookOutlined, GoogleCircleFilled, LinkedinOutlined, TwitterCircleFilled } from "@ant-design/icons";

function Buttontype(){
    return(
        <div>
            <h4>Button Types</h4>
            <div className="buttontypes">
                <p>{<LinkedinOutlined/>}</p>
                <p>Linkedin Button</p>
            </div>
            <div className="buttontypes">
                <p>{<FacebookOutlined/>}</p>
                <p>facebook Button</p>
            </div>
            <div className="buttontypes">
                <p>{<GoogleCircleFilled/>}</p>
                <p>Google Button</p>
            </div>
            <div className="buttontypes">
                <p>{<TwitterCircleFilled/>}</p>
                <p>Twitter Button</p>
            </div>

        </div>
    )
}

export default Buttontype