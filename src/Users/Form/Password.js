import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

export function Password({ control, errors }) {
	return (
		<Controller
			control={control}
			name="password"
			rules={{ required: true }}
			render={({ field }) => (
				<Row className="mb-3">
					<Col sm={2}>Password*</Col>
					<Col sm={10}>
						<Form.Group controlId="exampleForm.ControlInput2">
							<Form.Control
								isInvalid={errors.password}
								{...field}
								type="password"
							/>
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
