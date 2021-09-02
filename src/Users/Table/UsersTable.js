import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Card } from "react-bootstrap";
import { useData } from "./Data";

export function UsersTable() {
	const users = useData();

	return (
		<Card style={{ width: "77rem" }}>
			<Card.Header className="fs-4">List of users</Card.Header>
			<Card.Body>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Picture</th>
							<th>Username</th>
							<th>Email</th>
							<th>Comment</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{users}</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}
