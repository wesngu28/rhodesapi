export const excludeKeys = (keys: string) => {
  const excludedFields = keys ? keys.split(",") : [];

  const fieldsObject = excludedFields.reduce((fieldsToExclude, field) => {
    fieldsToExclude[field] = 0;
    return fieldsToExclude;
  }, { date_added: 0, __v: 0 } as { [key: string]: number });

  return fieldsObject;
}