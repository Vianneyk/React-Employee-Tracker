import React from "react";

function Table(props) {

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name<button className='filter' onClick={props.sortName}><i class="fas fa-sort-alpha-down"></i></button></th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: "0.2px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>
                    <a href={"mailto:" + user.email} target="__blank">{user.email}</a>
                </td>
                <td>{user.phone}</td>
                <td>{user.location.city}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )

}

export default Table