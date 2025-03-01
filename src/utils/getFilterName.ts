export const getFilterName = (value: "asc" | "desc" | "rating" | "new"): string => {
    switch (value) {
      case "asc":
        return "Від найдешевших";
      case "desc":
        return "Від найдорожчих";
      case "rating":
        return "За рейтингом";
      case "new":
        return "Новинки";
      default:
        return "";
    }
  };