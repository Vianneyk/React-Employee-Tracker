import React from "react";

function Table(props) {

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name<button className='filter' onClick={props.sortName}><i className="fas fa-filter"></i></button></th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: "2px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )

}

export default Table