<template>
  <div>
    <header>
      <HeaderComponent
        :brewery="breweries"
        @searchBox="searching"
        @selectedType="selecting"
      ></HeaderComponent>
      <!--This searching and selecting methods 
      can be seen in app.vue's methods -->
    </header>
    <main>
      <section v-if="isLoading">
        <loading-component></loading-component>
      </section>
      <section v-else>
        <router-view
          :searchItems="searchItems"
          :selectItems="selectItems"
          :brewery="breweries"
          @loadMore="loading"
        ></router-view>
      </section>
    </main>
    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import LoadingComponent from "./components/LoadingComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    LoadingComponent,
    FooterComponent,
  },
  data() {
    return {
      breweries: [],
      isLoading: false,
      searchItems: [],
      selectItems: "",
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          "https://api.openbrewerydb.org/v1/breweries"
        );
        let data = await response.json();

        this.breweries = data;
        // console.log(this.breweries);
      } catch (error) {
        alert(`You have an error while fetching ${error}`);
      }
    },
    loading(value) {
      console.log(value);
      this.isLoading = value;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
    //
    searching({ value1, value2 }) {
      // console.log(this.searchItems);
      this.searchItems = value2;
      // adding the value to the data array,

      // This is for loading animation so can skip this part
      this.isLoading = value1;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
    selecting({ value1, value2 }) {
      // console.log(this.selectItems);
      this.selectItems = value2;
      // adding the value to the data array,

      // This is for loading animation so can skip this part
      this.isLoading = value1;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
#app {
  /* main page background */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(@/assets/brewery.jpg);
}

/* This is for scroll bar */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f5b5b5;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #668f8f;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3e8295;
}
</style>
