export default function company(prop) {
	let item = prop.item;

  return (
    <div className="flex-grow-0 flex-shrink-0 w-4/12 lg:w-1/5 bg-white p-6 mr-4 rounded-tl-lg rounded-br-lg">
			{item.id}
		</div>
  );
}