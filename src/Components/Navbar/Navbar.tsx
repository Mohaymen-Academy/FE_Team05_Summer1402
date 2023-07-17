import { NavbarButton } from "../NavbarButton";
import React from "react";
import { navbarTexts } from "../../util/Constants";

function Navbar(): React.ReactNode {
	return (
		<>
			<ul className="flex gap-4">
				{navbarTexts.map((text) => (
					<NavbarButton text={text} href={"#"} />
				))}
			</ul>
		</>
	);
}

export default Navbar;
