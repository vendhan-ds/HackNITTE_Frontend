
import { BrowserRouter, Route, Routes } from "react-router-dom";
import protectedRoutes from "./protectedRoutes";
import routes from "./routes";
import { NotFound } from "../Pages";
import { Protected } from "../Components";

const Router = () => {

	return (
		<>
			<BrowserRouter>
				<Routes>
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<>{route.element}</>}
							/>
						);
					})}

					{protectedRoutes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<Protected>{route.element}</Protected>}
							/>
						);
					})}
					<Route
						path="*"
						element={
							<>
								<NotFound />
								
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;