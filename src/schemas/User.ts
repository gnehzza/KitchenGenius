// User Data Model

type User = {
  firstName: string;
  lastName: string;
  id: string;
  profilePictureURL: string;
  recipes: Array<UserRecipe>;
  tracks: Array<UserTrack>;
  friends: Array<string>;
  favoriteRecipes: Array<string>;
  wishListRecipes: Array<string>;
};

type UserRecipe = {
  recipeId: string;
  tasteScore: number;
  easeScore: number;
  totalTime: number;
  completedSteps: Array<number>;
  pendingSteps: Array<number>;
  dateCompleted: number; // Date
  // Computed
  isComplete: boolean;
};

type UserTrack = {
  trackId: string;
  selectedRecipes: Array<string>;
  completedRecipes: Array<number>;
  pendingRecipes: Array<number>;
  dateCompleted: number; // Date
  // Computed
  isComplete: boolean;
};
