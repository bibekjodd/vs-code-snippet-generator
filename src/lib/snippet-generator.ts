import { BaseInputs } from '@/hooks/useSnippetGenerator';

export class SnippetGenerator {
  result = '';
  #input = '';
  #description = '';
  #tabTriggerName = '';
  #body = '';

  constructor({ input, description, tabTriggerName }: BaseInputs) {
    this.#input = input;
    this.#description = description;
    this.#tabTriggerName = tabTriggerName;
    this.#generate();
  }

  #generate() {
    this.#writeBody();
    this.result = `{
  "${this.#description}": {
    "prefix": "${this.#tabTriggerName}",
    ${this.#body}
    "description": "${this.#description}"
  }  
}`;
  }

  #writeBody() {
    const lines = this.#input.split('\n');
    const resultLines = lines.map(
      (line) => ' '.repeat(6) + JSON.stringify(`${line}`)
    );
    this.#body = `"body": [
${resultLines.join(',\n')}
    ],`;
  }
}
