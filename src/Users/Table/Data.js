import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { getUsers, deleteUser } from "../../API/API";
import { URL } from "../../URL/URL";

export function useData() {
	const [data, setData] = useState([]);
	const users = data.map((user, index) => {
		return (
			<tr key={index}>
				<td style={{ width: "10rem" }}>{user._id}</td>
				<td style={{ width: "10rem" }}>
					<Image
						style={{ width: "8rem" }}
						src={`${URL}${user.imageUrl}`}
						thumbnail
					/>
				</td>
				<td style={{ width: "12rem" }}>{user.username}</td>
				<td style={{ width: "17rem" }}>{user.email}</td>
				<td style={{ width: "17rem" }}>{user.comment}</td>
				<td style={{ width: "5rem" }}>
					<Button
						variant="danger"
						onClick={() => deleteUser(user._id, user.imageUrl)}
					>
						Delete
					</Button>
				</td>
			</tr>
		);
	});
	useEffect(() => {
		getUsers(setData);
	}, []);
	return users;
}
