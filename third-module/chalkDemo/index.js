import chalk from 'chalk';
import sliceAnsi from 'slice-ansi';

const string = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

console.log(sliceAnsi(string, 20, 30));