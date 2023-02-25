import React, { Component } from "react";
import CiaoList from "../CiaoList";
import CiaoButton from "../CiaoButton";

class CiaoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 4, firstName: "Brad", lastName: "Pitt" },
                { id: 3, firstName: "Tom", lastName: "Test" },
                { id: 2, firstName: "Bary", lastName: "PP" },
                { id: 1, firstName: "Cate", lastName: "Cate" },
            ],
            isDirectGrowById: true,
            isDirectGrowByFirstName: true,
            isDirectGrowByLastName: true,
        };
    }
    sortById = () => {
        const { users, isDirectGrowById } = this.state;

        const newUsers = [...users];

        newUsers.sort((a, b) => (isDirectGrowById ? a.id - b.id : b.id - a.id));
        this.setState({ users: newUsers, isDirectGrowById: !isDirectGrowById });
    };
    sortByFirstName = () => {
        const { users, isDirectGrowByFirstName: direction } = this.state;
        const newUsers = [...users];
        newUsers.sort((a, b) => {
            if (a.firstName > b.firstName) {
                return direction ? -1 : 1;
            }
            if (a.firstName < b.firstName) {
                return direction ? 1 : -1;
            }
            return 0;
        });
        this.setState({ users: newUsers, isDirectGrowByFirstName: !direction });
    };
    sortByLastName = () => {
        const { users, isDirectGrowByLastName: direction } = this.state;
        const newUsers = [...users];
        newUsers.sort((a, b) => {
            if (a.lastName > b.lastName) {
                return direction ? -1 : 1;
            }
            if (a.lastName < b.lastName) {
                return direction ? 1 : -1;
            }
            return 0;
        });
        this.setState({ users: newUsers, isDirectGrowByLastName: !direction });
    };

    render() {
        const {
            users,
            isDirectGrowById,
            isDirectGrowByFirstName,
            isDirectGrowByLastName,
        } = this.state;
        console.log(users);
        return (
            <>
                <CiaoButton
                    onClick={this.sortById}
                    title="Sort by id"
                    direction={isDirectGrowById ? "gorowth" : "decrease"}
                />
                <CiaoButton
                    onClick={this.sortByFirstName}
                    title="Sort by name"
                    direction={isDirectGrowByFirstName ? "gorowth" : "decrease"}
                />
                <CiaoButton
                    onClick={this.sortByLastName}
                    title="Sort by last name"
                    direction={isDirectGrowByLastName ? "gorowth" : "decrease"}
                />
                <CiaoList users={users} />
            </>
        );
    }
}

export default CiaoSection;
