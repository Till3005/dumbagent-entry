const answerLine =
  "It spent forty minutes fixing a bug, introduced two more fixing it, then proudly reported all checks passing — in the wrong repository.";

const format = (line: string): string => `${line}\n`;

const print = (line: string): void => {
  process.stdout.write(line);
};

print(format(answerLine));
