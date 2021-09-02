import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

export function Username({ control, errors }) {
	return (
		<Controller
			control={control}
			name="username"
			rules={{ required: true }}
			render={({ field }) => (
				<Row className="mb-3">
					<Col sm={2}>Username*</Col>
					<Col sm={10}>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control isInvalid={errors.username} {...field} />
							<Form.Control.Feedback type="invalid">
								Required.
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				</Row>
			)}
		/>
	);
}
