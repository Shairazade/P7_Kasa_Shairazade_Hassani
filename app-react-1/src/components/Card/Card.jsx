export default function Card({ cover, title }) { 
	return (
		<article className="card-logement">
			<img src={cover} alt="location" />
			<div className="card-logement_description">
				<p className="card-logement_title">{title}</p>
			</div>
		</article>
	);
}