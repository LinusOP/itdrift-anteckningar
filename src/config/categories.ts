type CategoryConfigItem = {
  order: number;
};

export const categoryConfig: Partial<Record<string, CategoryConfigItem>> = {
  arbetsmiljo: {
    order: 99,
  },
};
