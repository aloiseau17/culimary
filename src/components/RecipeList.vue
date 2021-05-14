<template>
  <label for="filter">Rechercher par ingrédients</label>
  <br />
  <input id="filter" type="text" v-model="filtersIngredient" />
  total: {{ recipesFiltered.length }}

  <ElTable height="80vh" :data="recipesDisplayed">
    <!-- NAME -->
    <ElTableColumn prop="name" label="Nom" />
    <!-- INGREDIENTS -->
    <ElTableColumn prop="ingredients" label="Ingrédients" #default="{ row }">
      <span
        class="ingredient"
        v-for="(ingredient, index) in row.ingredients"
        :key="`${index}-${ingredient}-ingredient`"
      >
        {{ ingredient }}
      </span>
    </ElTableColumn>
    <!-- TYPE -->
    <ElTableColumn prop="type" label="Type" />
    <!-- FAVORITE -->
    <ElTableColumn
      prop="isFavorite"
      label="Favoris"
      :formatter="isFavoriteFormatter"
    />
    <!-- LOCATION -->
    <ElTableColumn prop="location" label="Emplacement" #default="{ row }">
      <!-- <strong>{{ row.location.type }}:</strong> -->
      <i
        class="location-icon"
        :class="{
          'el-icon-notebook-2': row.location.type === 'livre',
          'el-icon-link': row.location.type === 'web',
        }"
      ></i>
      <template v-if="row.location.type === 'web'">
        <a :href="row.location.detail" target="_blank">
          {{ row.location.detail }}
        </a>
      </template>
      <template v-else>
        {{ row.location.detail }}
      </template>
    </ElTableColumn>
  </ElTable>

  <ElPagination
    layout="prev, pager, next"
    :total="recipesFiltered.length"
    :page-size="pagesize"
    v-model:currentPage="currentPage"
  />
</template>

<script>
import recipes from '@/data/recipes.json'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'

export default {
  name: 'RecipeList',
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
  },
  data() {
    return {
      recipes: recipes,
      currentPage: 1,
      pagesize: 8,
      filtersIngredient: null,
    }
  },
  watch: {
    filtersIngredient() {
      this.currentPage = 1
    },
  },
  computed: {
    recipesFiltered() {
      return this.recipes.filter((recipe) => {
        return this.filtersIngredient
          ? recipe.ingredients.join().includes(this.filtersIngredient)
          : true
      })
    },
    recipesDisplayed() {
      return this.recipesFiltered.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )
    },
  },
  methods: {
    isFavoriteFormatter(row) {
      return row.isFavorite ? '✔️' : '❌'
    },
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

.location-icon {
  font-size: 1.4em;
  margin-right: 5px;
}
</style>
