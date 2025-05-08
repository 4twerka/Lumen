export const highLightMatchText = (text: string, search: string) => {
  if (!search || search.length < 2) return text;
    
  const lowerText = text.toLowerCase();
  const lowerSearch = search.toLowerCase();

  const result: (string | JSX.Element)[] = [];
  for (let i = 0; i < text.length; ) {
    const segment = lowerText.slice(i, i + search.length);
    
    if (segment === lowerSearch) {
      result.push(<mark key={i}>{text.slice(i, i + search.length)}</mark>);
      i += search.length;
    } else {
      result.push(text[i]);
      i += 1;
    }
  }
  return result;
};
