<template>
  <table>
    <thead>
      <th v-for="header in headers" :key="`${header.value}-header-item`">
        {{ header.text }}
      </th>
    </thead>
    <tbody>
      <tr v-for="recipe in recipes" :key="`${recipe.id}-recipe-item`">
        <td v-for="header in headers" :key="`${header.value}-recipe-col-item`">
          <!-- INGREDIENTS -->
          <template v-if="header.value === 'ingredients'">
            <span
              class="ingredient"
              v-for="(ingredient, index) in recipe.ingredients"
              :key="`${index}-${ingredient}-ingredient`"
            >
              {{ ingredient }}
            </span>
          </template>

          <!-- LOCATION -->
          <template v-else-if="header.value === 'location'">
            <strong>{{ recipe.location.type }}:</strong>
            <template v-if="recipe.location.type === 'web'">
              <a :href="recipe.location.detail" target="_blank">
                {{ recipe.location.detail }}
              </a>
            </template>

            <template v-else>
              {{ recipe.location.detail }}
            </template>
          </template>

          <!-- FAVORITE -->
          <template v-else-if="header.value === 'isFavorite'">
            {{ recipe[header.value] ? '✔️' : '❌' }}
          </template>

          <!-- DEFAULT -->
          <template v-else>
            {{ recipe[header.value] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import recipes from '@/data/recipes.json'

export default {
  name: 'RecipeList',
  data() {
    return {
      headers: [
        {
          text: 'Nom',
          value: 'name',
        },
        {
          text: 'Ingrédients',
          value: 'ingredients',
        },
        {
          text: 'Type',
          value: 'type',
        },
        {
          text: 'Favoris',
          value: 'isFavorite',
        },
        {
          text: 'Emplacement',
          value: 'location',
        },
      ],
      recipes: recipes,
    }
  },
}
</script>

<style lang="scss" scoped>
.ingredient {
  border: 2px solid #6ca8ec;
  border-radius: 2em;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 15px;
  height: 20px;
  line-height: 1em;
  display: inline-block;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #ececec;
}
</style>
