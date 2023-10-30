import { SnippetGenerator } from '@/lib/snippet-generator';
import { create } from 'zustand';

export type BaseInputs = {
  input: string;
  description: string;
  tabTriggerName: string;
};

type UseSnippetGenerator = BaseInputs & {
  result: string;

  inputsChanged: (inputs: Partial<BaseInputs>) => void;
  generate: () => void;
};

export const useSnippetGenerator = create<UseSnippetGenerator>((set, get) => ({
  input: '',
  description: '',
  tabTriggerName: '',
  result: '',

  inputsChanged(inputs) {
    set(inputs);
    get().generate();
  },

  generate() {
    const { input, description, tabTriggerName } = get();
    const { result } = new SnippetGenerator({
      input,
      description,
      tabTriggerName
    });
    set({ result });
  }

  // end
}));
