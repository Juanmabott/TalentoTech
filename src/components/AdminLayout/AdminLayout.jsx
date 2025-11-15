import React from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
	return (
		<section className="admin-layout">
			<Outlet />
		</section>
	);
};
