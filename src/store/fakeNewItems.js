import uudi from 'uuid/v1';

export const createNewItem = entity => {
  return {
    id: {
      value: uudi(),
      displayList: false,
    },
    name: {
      value: `Nouvelle ${entity}`,
      displayList: true,
    },
    value: {
      value: 2000,
      displayList: false,
    },
    entity: {
      value: entity,
      displayList: false,
    },
    category: {
      value: '',
      displayList: true,
    },
    children: {
      value: [],
      displayList: false,
    },
    valorisations: {
      value: [],
      displayList: false,
    },
  };
};
