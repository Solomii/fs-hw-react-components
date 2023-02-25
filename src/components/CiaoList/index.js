import React from "react";
import Ciao from "../Ciao";

const CiaoList = (props) => {
    const mapUsers = (user) => {
        return (
            <Ciao
                key={user.id}
                id={user.id}
                name={user.firstName + " " + user.lastName}
                classStyle="ciao__welcome"
            />
        );
    };

    const { users } = props;
    return <>{users.map(mapUsers)}</>;
};

export default CiaoList;
