export default function createEmployeesObject(departmentName, employess) {
	return {
		[departmentName]: [
			...employees,
		],
	};
}
