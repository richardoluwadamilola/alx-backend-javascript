export default function getNeighbourhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighbourhood = (newNeighbourhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
