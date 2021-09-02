import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

export function Email({ control, errors }) {
	return (
		<Controller
			control={control}
			name="email"
			rules={{ required: true }}
			render={({ field }) => (
				<Row className="mb-3">
					<Col sm={2}>Email*</Col>
					<Col sm={10}>
						<Form.Group controlId="exampleForm.ControlInput3">
							<Form.Control isInvalid={errors.email} {...field} type="email" />
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
