import React from 'react';
import AboutBanner from "../components/AboutBanner/AboutBanner";
import Collapse from "../components/Collapse/Collapse";
import about from "../data/about.json";

export default function About() {
	return (
		<div>
			<AboutBanner />
			{about.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</div>
	);
}