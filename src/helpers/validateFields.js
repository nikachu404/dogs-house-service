export const validateFields = (fields) => {
  for (const field of fields) {
    if (!field.value && field.value !== 0) {
      return field.error;
    }
  }

  return null;
};
