export const collectIdsAndDocs = doc => ({...doc.data(), id: doc.id});

export const hasBlank = data => {
  const lengths = data.map(item => item.length);
  return lengths.includes(0);
};

const vegetables = ['🍆', '🥔', '🥕', '🥒', '🥬', '🥦', '🍄'];
const fruits = ['🥝', '🥭', '🍈', '🍍', '🍇', '🍉', '🍌', '🥑', '🍎'];
const meats = ['🥩', '🍖', '🥓'];
const sugars = [
  '🍬',
  '🍫',
  '🍭',
  '🪅',
  '🧋',
  '🍔',
  '🍟',
  '🍕',
  '🍨',
  '🍩',
  '🍪',
  '🍮',
];

export const getIcon = foodItem => {
  if (foodItem.includes('Vegetable'))
    return vegetables[
      Math.floor(Math.random() * (vegetables.length - 1 - 0 + 1)) + 0
    ];
  else if (foodItem === 'Fruits')
    return fruits[Math.floor(Math.random() * (fruits.length - 1 - 0 + 1)) + 0];
  else if (foodItem === 'Milk') return '🥛';
  else if (foodItem.includes('Rice')) return '🍚';
  else if (foodItem.includes('Meat'))
    return meats[Math.floor(Math.random() * (meats.length - 1 - 0 + 1)) + 0];
  else if (foodItem === 'Fat') return '🥩';
  else if (foodItem === 'Sugar')
    return sugars[Math.floor(Math.random() * (sugars.length - 1 - 0 + 1)) + 0];
};
