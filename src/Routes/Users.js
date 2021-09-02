import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Container,
	Row,
	Col,
	Form,
	Card,
	Alert,
	Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UsersTable } from "../Users/Table/UsersTable";
import { Picture } from "../Users/Form/Picture";
import { Username } from "../Users/Form/Username";
import { Password } from "../Users/Form/Password";
import { Email } from "../Users/Form/Email";
import { Comment } from "../Users/Form/Comment";
import { addUser } from "../API/API";
import { getBase64 } from "../Users/Form/Base64";

function Users() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const inputRef = useRef();
	const onSubmit = (data) => {
		const image = inputRef.current.files[0];
		const type = image.type.split("/")[1];
		getBase64(image).then((file) => {
			data.image = file;
			data.imageType = type;
			addUser(data);
		});
	};

	return (
		<Container className="mt-5" fluid>
			<Row className="justify-content-md-center mb-3">
				<Col md="auto">
					<UsersTable />
				</Col>
			</Row>
			<Row className="justify-content-md-center mb-3">
				<Col md="auto">
					<Card style={{ width: "55rem" }}>
						<Card.Header className="fs-4">Add User</Card.Header>
						<Card.Body>
							<Form onSubmit={handleSubmit(onSubmit)}>
								<legend>
									<Alert variant="success">(*) Required!</Alert>
								</legend>
								<Picture inputRef={inputRef} control={control} />
								<Username control={control} errors={errors} />
								<Password control={control} errors={errors} />
								<Email control={control} errors={errors} />
								<Comment control={control} errors={errors} />
								<Row className="mb-3">
									<Col sm={2}></Col>
									<Col sm={10}>
										<Button
											className="float-end"
											variant="primary"
											type="submit"
										>
											Submit
										</Button>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Users;
