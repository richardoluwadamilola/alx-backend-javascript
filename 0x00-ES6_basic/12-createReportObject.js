export default function createReportObject(employessList) {
	return {
		allEmployees: employeesList,
		getNumberOfDepartments(employeesList) {
			return Object.keys(employeesList).length;
		},
	};
}
