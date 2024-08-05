export const selectContacts = (state) => state.contacts;
export const selectFilteredContacts = (state) => {
  const filter = state.filter.toLowerCase();
  return state.contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.includes(filter)
  );
};
