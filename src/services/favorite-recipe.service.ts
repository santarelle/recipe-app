import { Recipe } from 'src/models/Recipe';

/* eslint-disable max-len */
const INITIAL_RECIPES = [
  {
    id: '52772',
    title: 'Teriyaki Chicken Casserole',
    titleUnique: `52772-${'Teriyaki Chicken Casserole'
      .replace(/ /g, '-')
      .toLowerCase()}`,
    categoryName: 'Chicken',
    preparations: [
      'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.',
      'Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.',
      'Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.',
      'Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.',
      '*Meanwhile, steam or cook the vegetables according to package directions.',
      'Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
    ],
    imgUrl: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    tags: 'Meat,Casserole',
    ingredients: [
      { measure: '3/4 cup', name: 'soy sauce' },
      { measure: '1/2 cup', name: 'water' },
      { measure: '1/4 cup', name: 'brown sugar' },
      { measure: '1/2 teaspoon', name: 'ground ginger' },
      { measure: '1/2 teaspoon', name: 'minced garlic' },
      { measure: '4 Tablespoons', name: 'cornstarch' },
      { measure: '2', name: 'chicken breasts' },
      { measure: '1 (12 oz.)', name: 'stir-fry vegetables' },
      { measure: '3 cups', name: 'brown rice' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/4aZr5hZXP_s',
  },
  {
    id: '52838',
    title: 'Venetian Duck Ragu',
    titleUnique: `52838-${'Venetian Duck Ragu'
      .replace(/ /g, '-')
      .toLowerCase()}`,
    categoryName: 'Pasta',
    preparations: [
      'Heat the oil in a large pan. Add the duck legs and brown on all sides for about 10 mins. Remove to a plate and set aside. Add the onions to the pan and cook for 5 mins until softened. Add the garlic and cook for a further 1 min, then stir in the cinnamon and flour and cook for a further min. Return the duck to the pan, add the wine, tomatoes, stock, herbs, sugar and seasoning. Bring to a simmer, then lower the heat, cover with a lid and cook for 2 hrs, stirring every now and then.',
      'Carefully lift the duck legs out of the sauce and place on a plate – they will be very tender so try not to lose any of the meat. Pull off and discard the fat, then shred the meat with 2 forks and discard the bones. Add the meat back to the sauce with the milk and simmer, uncovered, for a further 10-15 mins while you cook the pasta.',
      'Cook the pasta following pack instructions, then drain, reserving a cup of the pasta water, and add the pasta to the ragu. Stir to coat all the pasta in the sauce and cook for 1 min more, adding a splash of cooking liquid if it looks dry. Serve with grated Parmesan, if you like.',
    ],
    imgUrl: 'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
    tags: null,
    ingredients: [
      { measure: '1 tbls', name: 'Olive Oil' },
      { measure: '4', name: 'Duck Legs' },
      { measure: '2 finely chopped', name: 'Onions' },
      { measure: '2 cloves minced', name: 'Garlic' },
      { measure: '2 tsp ground', name: 'Cinnamon' },
      { measure: '2 tsp', name: 'Plain Flour' },
      { measure: '250ml', name: 'Red Wine' },
      { measure: '800g', name: 'Chopped Tomatoes' },
      { measure: '1', name: 'Chicken Stock Cube' },
      { measure: '3 sprigs', name: 'Rosemary' },
      { measure: '2', name: 'Bay Leaves' },
      { measure: '1 tsp ', name: 'Sugar' },
      { measure: '2 tbs', name: 'Milk' },
      { measure: '600g', name: 'Paccheri Pasta' },
      { measure: 'Grated', name: 'Parmesan Cheese' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/oWQDVgjB_Lw',
  },
  {
    id: '52869',
    title: 'Tahini Lentils',
    titleUnique: `52869-${'Tahini Lentils'.replace(/ /g, '-').toLowerCase()}`,
    categoryName: 'Vegetarian',
    preparations: [
      'In a jug, mix the tahini with the zest and juice of the lemon and 50ml of cold water to make a runny dressing. Season to taste, then set aside.',
      'Heat the oil in a wok or large frying pan over a medium-high heat. Add the red onion, along with a pinch of salt, and fry for 2 mins until starting to soften and colour. Add the garlic, pepper, green beans and courgette and fry for 5 min, stirring frequently.',
      'Tip in the kale, lentils and the tahini dressing. Keep the pan on the heat for a couple of mins, stirring everything together until the kale is wilted and it’s all coated in the creamy dressing.',
    ],
    imgUrl: 'https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg',
    tags: 'Pulse',
    ingredients: [
      { measure: '50g', name: 'Tahini' },
      { measure: 'zest and juice of 1', name: 'Lemon' },
      { measure: '2 tblsp ', name: 'Olive Oil' },
      { measure: '1 chopped', name: 'Red Onions' },
      { measure: '1 clove peeled crushed', name: 'Garlic' },
      { measure: '1 thinly sliced', name: 'Yellow Pepper' },
      { measure: '200g', name: 'Green Beans' },
      { measure: '1 sliced', name: 'Courgettes' },
      { measure: '100g shredded', name: 'Kale' },
      { measure: '250g pack', name: 'Lentils' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/8kRlmz8pW0I',
  },
];
/* eslint-enable max-len */

class FavoriteRecipeService {
  private storageName = '@RecipeApp/Favorites';

  private recipes: Recipe[] = [];

  constructor() {
    const saved = localStorage.getItem(this.storageName);
    if (!saved) {
      localStorage.setItem(this.storageName, JSON.stringify(INITIAL_RECIPES));
      this.recipes = INITIAL_RECIPES;
    } else {
      this.recipes = JSON.parse(saved);
    }
  }

  getFavorites = (): Recipe[] => this.recipes;

  getById = (id: string): Recipe | undefined =>
    this.recipes.find((recipe) => recipe.id === id);

  remove = (id: string): void => {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem(this.storageName, JSON.stringify(this.recipes));
  };

  save = (recipe: Recipe): void => {
    this.recipes.push(recipe);
    localStorage.setItem(this.storageName, JSON.stringify(this.recipes));
  };
}

export default new FavoriteRecipeService();
