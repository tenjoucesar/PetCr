export const DEFAULT_SELECTED_TAB = {
  activeTab: {
    tabKey: 'Todas las mascotas',
  },
};

export const TAB_KEYS = [
  { name: 'Todas las mascotas',  value: 'Todas Las Mascotas', id: 1, tabKey: 'allPets' },
  { name: 'Perros',  value: 'Perros', id: 2, tabKey: 'dog' },
  { name: 'Gatos',  value: 'Gatos', id: 3, tabKey: 'cat' }
]

export const createTabConfig = ({ name, id }) => ({
  name,
  key: id,
  id,
});