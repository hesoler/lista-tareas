const idValue = crypto.randomUUID();
export type idType = typeof idValue;

export type TaskType = {
  id: idType;
  title: string;
  completed: boolean;
};

