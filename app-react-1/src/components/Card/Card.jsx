export default function Card({ cover, title }) { 
	return (
		<article className="card-logement">
			<img src={cover} alt="location" />
			<div className="card-logement-description">
				<p className="card-logement-title">{title}</p>
			</div>
		</article>
	);
}