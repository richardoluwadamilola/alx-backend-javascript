process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const Dee = process.stdin.read();

	if (Dee) {
		process.stdout.write(`Your name is: ${Dee}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
