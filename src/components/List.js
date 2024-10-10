function Task(props){
	return (
		<li>{props.description}<input type="checkbox" checked={props.completed}/></li>
	)
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				<Task description={props.tasks[0].description} completed={props.tasks[0].completed}/>
				<Task description={props.tasks[1].description} completed={props.tasks[1].completed}/>
				<Task description={props.tasks[2].description} completed={props.tasks[2].completed}/>
			</ul>
		</div>
	);
}

export default List;
