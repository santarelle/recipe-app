import axios, { AxiosInstance } from 'axios';

import { Recipe, RecipeSimple } from 'src/models/Recipe';

import { Category } from '../models/Category';

class TheMealDBService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.themealdb.com/api/json/v1/1',
    });
  }

  categories = (): Promise<Category[]> =>
    this.api
      .get('categories.php')
      .then((response) => response.data)
      .then(({ categories }) =>
        categories.map(
          (cat: any) =>
            ({
              id: cat.idCategory,
              name: cat.strCategory,
              imgUrl: cat.strCategoryThumb,
              description: cat.strCategoryDescription,
            } as Category),
        ),
      );

  findById = (id: string): Promise<Recipe | undefined> =>
    this.api
      .get(`/lookup.php?i=${id}`)
      .then((response) => response.data)
      .then(({ meals }) =>
        meals && meals.length > 0
          ? this.parseMealToRecipe(meals[0])
          : undefined,
      );

  filterByCategory = (category: string): Promise<RecipeSimple[]> =>
    this.api
      .get(`filter.php?c=${category}`)
      .then((response) => response.data)
      .then(({ meals }) =>
        meals
          ? meals.map(
              (meal: any) =>
                ({
                  id: meal.idMeal,
                  title: meal.strMeal,
                  titleUnique: `${meal.idMeal}-${meal.strMeal
                    .replace(/ /g, '-')
                    .toLowerCase()}`,
                } as RecipeSimple),
            )
          : [],
      );

  search = (name: string): Promise<Recipe[]> =>
    this.api
      .get(`search.php?s=${name}`)
      .then((response) => response.data)
      .then(({ meals }) =>
        meals ? meals.map((meal: any) => this.parseMealToRecipe(meal)) : [],
      );

  private parseMealToRecipe = (meal: any): Recipe =>
    ({
      id: meal.idMeal,
      title: meal.strMeal,
      titleUnique: `${meal.idMeal}-${meal.strMeal
        .replace(/ /g, '-')
        .toLowerCase()}`,
      categoryName: meal.strCategory,
      preparations: meal.strInstructions.split('\r\n'),
      imgUrl: meal.strMealThumb,
      youtubeUrl: meal.strYoutube
        ? meal.strYoutube.replace(
            'https://www.youtube.com/watch?v=',
            'https://www.youtube.com/embed/',
          )
        : undefined,
      ingredients: this.parseIngredients(meal),
      tags: meal.strTags,
    } as Recipe);

  private parseIngredients = (
    meal: any,
  ): { name: string; measure: string }[] => {
    const ingredients: { name: string; measure: string }[] = [];
    Object.keys(meal)
      .filter((attr) => attr.startsWith('strIngredient') && meal[attr])
      .forEach((attr) => {
        ingredients.push({
          name: meal[attr],
          measure: meal[`strMeasure${attr[attr.length - 1]}`],
        });
      });

    return ingredients;
  };
}

export default new TheMealDBService();
