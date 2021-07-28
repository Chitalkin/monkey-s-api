export default (degree: number): string => {
  if (degree > 337.5) return 'Северное';
  if (degree > 292.5) return 'Северо-западное';
  if (degree > 247.5) return 'Западное';
  if (degree > 202.5) return 'Юго-западное';
  if (degree > 157.5) return 'Южное';
  if (degree > 122.5) return 'Юго-восточное';
  if (degree > 67.5) return 'Восточное';
  if (degree > 22.5) { return 'Северо-восточное'; }
  return 'Северное';
};
