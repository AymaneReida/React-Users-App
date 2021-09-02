import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";

const Users = React.lazy(() => import("./Routes/Users"));

function App() {
	return (
		<div>
			<Suspense fallback={<Spinner animation="border" />}>
				<section>
					<Users />
				</section>
			</Suspense>
		</div>
	);
}

export default App;
