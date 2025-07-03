export const formatDate = (value: string) => {
  const date = new Date(value);
  return (
    date.toLocaleDateString("uk-UA").slice(0, -4) +
    date.toLocaleDateString("uk-UA").slice(-2)
  );
};
