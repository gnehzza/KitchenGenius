type Recipe = {
  id: string;
  name: string;
  tracks: Array<string>;
  requiredEquipment: Array<string>;
  requiredIngredients: Array<Ingredient>;
  optionalEquipment: Array<string>;
  optionalIngredients: Array<string>;
  prepTime: number;
  cookTime: number;
  instructions: Array<string>;

  // Computed Properties like categories (fn of ingredients)
  totalRatings: number;
  averageTasteScore: number;
  averageEaseScore: number;
};
