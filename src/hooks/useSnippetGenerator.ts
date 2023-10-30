import { create } from 'zustand';

type ChangedInputsArg = {
  input?: string;
  description?: string;
  tabTriggerName?: string;
};

interface UseSnippetGenerator {
  input: string;
  description: string;
  tabTriggerName: string;
  output: string;

  inputsChanged: (inputs: ChangedInputsArg) => void;
  generate: () => void;
}

export const useSnippetGenerator = create<UseSnippetGenerator>((set, get) => ({
  input: '',
  description: '',
  tabTriggerName: '',
  output: '',

  inputsChanged(inputs) {
    set(inputs);
    get().generate();
  },

  generate() {
    const { input, description, tabTriggerName } = get();
    const output = '';
    set({ output });
  }

  // end
}));
