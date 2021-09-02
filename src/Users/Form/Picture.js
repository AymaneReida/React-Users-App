import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

export function Picture({ inputRef, control }) {
	return (
		<Controller
			control={control}
			name="image"
			defaultValue=""
			render={({ field }) => (
				<Row className="mb-3">
					<Col sm={2}>Picture*</Col>
					<Col sm={10}>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Control
								type="file"
								accept="image/*"
								ref={inputRef}
								required
							/>
						</Form.Group>
					</Col>
				</Row>
			)}
		/>
	);
}
