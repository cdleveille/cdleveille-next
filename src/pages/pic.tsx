import type { NextPage } from "next";
import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import ProfPic from "../components/ProfPic";
import { Url } from "../types/constants";

const Pic: NextPage = () => {
	return (
		<>
			<Head />
			<div style={{ margin: "2rem", textAlign: "center" }}>
				<ButtonLink href={Url.HOME} label="Home" target="_self" />
			</div>
			<div style={{ textAlign: "center" }}>
				<ProfPic id="prof-pic-page" />
			</div>
		</>
	);
};

export default Pic;
