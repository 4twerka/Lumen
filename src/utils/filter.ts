import { FiltersState } from "../types";

export const getPriceRange = (
  array: string[]
): { min: number; max: number }[] => {
  return array.map((item) => {
    const words = item.split(" ");
    if (words.includes("До")) {
      return { min: 0, max: parseInt(words[1].trim(), 10) };
    }
    if (words.includes("Понад")) {
      return { min: parseInt(words[1].trim(), 10), max: Infinity };
    }
    const [minStr, maxStr] = item.split("-");
    return {
      min: parseInt(minStr.trim(), 10),
      max: parseInt(maxStr.trim(), 10),
    };
  });
};

export const getSizeRange = (array: string[]): {min: number; max: number}[] => {
  return array.map((item) => {
    const match: RegExpMatchArray | null = item.match(/\((.*?)\)/);
    const matchResult = match ? match[1] : '';
    const words = matchResult.split(" ");
    
    if (words.includes("до")) {
      return { min: 0, max: parseInt(words[1].trim(), 10) };
    }
    if (words.includes("понад")) {
      return { min: parseInt(words[1].trim(), 10), max: Infinity };
    }
    const [minStr, maxStr] = words[0].split("-");
    return {
      min: parseInt(minStr.trim(), 10),
      max: parseInt(maxStr.trim(), 10),
    };
  })
}

export const filterOptions: FiltersState = {
  price: ["До 200 грн", "200-500 грн", "500-1000 грн", "Понад 1000 грн"],
  types: [],
  size: ["Маленькі (до 10 см)", "Середні (10-20 см)", "Великі (понад 20 см)"],
  aroma: [],
  assignment: [],
  color: [],
  material: [],
  form: [],
  features: [],
  giftWrapping: false
};

// export const filterOptions = {
//   price: ["До 200 грн", "200-500 грн", "500-1000 грн", "Понад 1000 грн"],
//   types: [
//     "Декоративні",
//     "Набори свічок",
//     "Плаваючі",
//     "Розсипні",
//     "Фігурні",
//     "Свічки у баночках",
//     "Класичні",
//     "Ручна робота",
//     "Бездимні",
//     "Ароматичні свічки",
//   ],
//   size: ["Маленькі (до 10 см)", "Середні (10-20 см)", "Великі (понад 20 см)"],
//   aroma: [
//     "Ранкова кава",
//     "Вечірня хата",
//     "Після дощу в лісі",
//     "Теплий хліб",
//     "З дере’яними гнотами",
//     "Медова теплість",
//     "Свічки без аромату",
//     "Тепле молоко",
//     "Золота осінь",
//     "Свіжість садка",
//     "Літній вечір",
//   ],
//   assignment: ["Для декору", "Для релаксу", "Для масажу"],
//   color: [
//     "Зелений",
//     "Червоний",
//     "Чорний",
//     "Кремовий",
//     "Білий",
//     "Золотий",
//     "Пастельні тони",
//   ],
//   material: ["Кокосовий Віск", "Бджолиний Віск", "Парафін", "Соєвий Віск"],
//   form: ["Спіральна", "Квадратна"],
//   features: [
//     "Натуральні інгедієнти",
//     "Еко-дружні",
//     "Антиалергійні",
//     "Для подарунка",
//     "Для особливих моментів",
//   ],
//   giftWrapping: false
// };
