let allStudents = ["A", "B-", 1, 4, 5, 2];

const getStudentsWhoPass = (allStudents) => {
	let studentsWhoPass = [];
	for (student of allStudents) {
    if (student !== "C-" && student !== 1 && student !== 2) {
			studentsWhoPass.push(student);
		}
	}
	return studentsWhoPass;
};

console.log(getStudentsWhoPass(allStudents));
