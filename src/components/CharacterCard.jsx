import "../App.css";

const charactersCard = () => {
	return (
		<div className="Card">
			<article>
				<h2>Name</h2>
				<div className="containerImg">
					<img
						src={displayImg(character)}
						alt="personnage"
						
					/>
				</div>
				<div className="containerDescription">
					<p>Description</p>
				</div>
			</article>
		</div>
	);
};

export default charactersCard;
