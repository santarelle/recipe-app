export interface Recipe {
  id: string;
  title: string;
  titleUnique: string;
  categoryName: string;
  preparations: string[];
  imgUrl: string;
  ingredients: { name: string; measure: string }[];
  tags: string | null;
  youtubeUrl?: string;
}

export interface RecipeSimple {
  id: string;
  title: string;
  titleUnique: string;
  imgUrl: string;
}
