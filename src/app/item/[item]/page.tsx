export default function ItemPage({ params }: { params: { item: string }}) {
	return (
		<div>
			<h1 className="text-3xl font-semibold capitalize">{params.item}</h1>
		</div>
	)
}
