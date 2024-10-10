function Task(props){
	return (
		<li>{props.description}</li>
	)
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				<Task description="Anya List"/>
				<Task description="Steph List"/>
				<Task description="Stanis List"/>
				<li>Learn React</li>
				<li>Learn JSX</li>
				<li>Build a React App</li>
			</ul>
		</div>
	);
}

export default List;
