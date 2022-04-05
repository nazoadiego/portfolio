/// <reference types="cypress"/>

describe("Test all links", () => {
	before(() => {
		cy.visit("/");
	});

	it("Test all links", () => {
		// const pages = ["about", "projects", "home"];
		// const links = cy
		// 	.get('[data-cy="nav-link"]')
		// 	.should("have.length", pages.length);
		// links.forEach((link) => {
		// 	link.invoke("attr", "href").then((href) => {
		// 		cy.visit(href);
		// 	});
		// });
	});
});
