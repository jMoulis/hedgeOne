/* eslint-disable import/prefer-default-export */
export const CONFIG = {
  id: 1123, // This number should be given at loading incoming Service Folder
  context: 'serviceFolder', // databaseName
  name: 'Facture',
  actions: [
    {
      displayedKey: 'name',
      entity: 'clients',
      label: 'Choisir un client',
    },
    {
      displayedKey: 'name',
      entity: 'montres',
      label: 'Choisir une montre',
    },
  ],
};
