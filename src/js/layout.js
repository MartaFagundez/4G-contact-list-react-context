import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ContactList from "./views/contact-list";
import AddContact from "./views/add-contact-form";
import { NotFound } from "./views/not-found";
import EditContact from "./views/edit-contact-form";
import ContactList2 from "./views/contact-list2";
import { ContactProvider } from "./store/contactsStore";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column min-vh-100 bg-sand">
			<BrowserRouter basename={basename}>
				<ContactProvider>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/contacts" element={<ContactList2 />} />
							<Route path="/contacts/new" element={<AddContact />} />
							<Route path="/contacts/edit/:id" element={<EditContact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</ContactProvider>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
