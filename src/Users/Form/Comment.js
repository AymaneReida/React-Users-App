import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

export function Comment({ control, errors }) {
	return (
		<Controller
			control={control}
			name="comment"
			rules={{ required: true }}
			render={({ field }) => (
				<Row className="mb-3">
					<Col sm={2}>Comment*</Col>
					<Col sm={10}>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Control
								isInvalid={errors.comment}
								{...field}
								as="textarea"
								rows={3}
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
