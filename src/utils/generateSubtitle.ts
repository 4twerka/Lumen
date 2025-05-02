const singularMap: Record<string, string> = {
    "Фігурні": "Фігурна свічка",
    "Плаваючі": "Плаваюча свічка",
    "Декоративні": "Декоративна свічка",
    "Класичні": "Класична свічка",
    "Бездимні": "Бездимна свічка",
    "Набори свічок": "Набір свічок",
    "Свічки в баночках": "Свічка в баночці",
    "Ароматичні свічки": "Ароматична свічка",
    "Розсипні": "Розсипна свічка",
    "Ручна робота": "Свічка ручної роботи",
  };
  
  export const generateSubtitle = (type: string, material: string): string => {
    const materials = ["Кокосовий віск", "Бджолиний віск", "Соєвий віск"];
    const isNaturalWax = materials.includes(material);
  
    const typeSingular = singularMap[type] || type;
  
    if (isNaturalWax) {
      return `${typeSingular} з натурального воску`;
    } else if (material === "Парафін") {
      return `${typeSingular} з натурального парафіну`;
    } else {
      return `${typeSingular}`;
    }
  }