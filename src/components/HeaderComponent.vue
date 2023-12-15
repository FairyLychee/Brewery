<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <!-- Brand -->
      <router-link to="/" class="navbar-brand">Brewery</router-link>

      <!-- Navigation Links -->
      <ul class="navbar-nav">
        <!-- Home Tab -->
        <li class="nav-item">
          <router-link to="/" class="nav-link me-3">Home</router-link>
        </li>

        <!-- Types Tab with Dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Types
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- Dropdown items -->
            <!-- Since this is li and a dropdown I can't use v model, so I use method -->
            <li v-for="type in uniqueTypes" :key="type">
              <a href="#" class="dropdown-item" @click="getType(type)">{{
                type
              }}</a>
              <!-- By adding type in the method as argument I can assign it to my data array(selectType) -->
            </li>
          </div>
        </li>
      </ul>

      <!-- Search Box -->
      <form class="form-inline ml-auto">
        <div class="input-group">
          <!-- 
            1. input က ရိုက်ထဲ့လိုက်တဲ့တန်ဖိုးကို data ထဲက searchValue တန်ဖိုးထဲမှာ v-model နဲ့သိမ်းထား 

            2. input က ရလာတဲ့ value နဲ့ api data ထဲက ကိုက်ညီတာတွေကို computed ထဲက searchItem နဲ့ စစ်ထုတ် 

            3. ရှာလိုက်တဲ့ နာမည်နဲ့ ကိုက်ညီတာတွေ ရလာတဲ့  array (searchItem) ကို app.vue ဆီကို ပို့ဆောင်ပေးဖို့အတွက်
               input element အောက်က router-link မှာ handleSearchClick method သုံးပြီးပို့ဆောင်ပေး 
               (not using inline $emit cuz I have to send two values which is true and array(searchItem)

            4. ဒီဖက်ကပို့တဲ့ဒေတာက app.vue ထဲမှာ method ရဲ့ argument အနေနဲ့ဝင်လာမှာဖြစ်လို့ (app.vue line no. 67)
               app.vue ထဲက data array နဲ့ argument ကိုညီပေး = ဒီဖက်က data ကို app.vue ထဲမှာရ

            5. app.vue ထဲက array data ကို attribute(:searchItems='searchItems') သုံးပြီး list page ကိုပို့ 

            6. List page မှာ props: ['searchItems'] နဲ့ပြန်ယူ ပီးတော့ Looping ပတ် (v-for='item in searchItems')
           -->
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            required
            v-model.lazy.trim="searchValue"
          />
          <router-link
            to="/BreweryPage"
            class="btn"
            type="submit"
            @click.prevent="handleSearchClick()"
            >Search</router-link
          >
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["brewery"],
  data() {
    return {
      searchValue: "",
      relatedItems: [], //ဒီကောင် လိုမလို မမှတ်မိတော့ လက်ရှိကုတ် အလုပ်လုပ်တဲ့အတွက် မပြင်ဘဲထားထား
      selectedType: "", // ဒါက dropdown ရဲ့ type
    };
  },
  computed: {
    uniqueTypes() {
      let uniqueTypes = [];
      for (let brewery of this.brewery) {
        if (!uniqueTypes.includes(brewery.brewery_type)) {
          uniqueTypes.push(brewery.brewery_type);
        }
      }
      return uniqueTypes;
    },
    searchItems() {
      // ရိုက်ထဲ့လိုက်တာတွေက အကြီးအသေးဖြစ်နိုင်တဲ့အတွက် lower case ကိုပြောင်း
      const lowerSearchValue = this.searchValue.toLowerCase().trim();

      return this.brewery.filter(
        (item) =>
          item.brewery_type.toLowerCase().includes(lowerSearchValue) ||
          item.city.toLowerCase().includes(lowerSearchValue) ||
          item.name.toLowerCase().includes(lowerSearchValue)
      );
    },
    gettingSelectedItems() {
      return this.brewery.filter((item) =>
        item.brewery_type.includes(this.selectedType)
      );
    },
  },
  methods: {
    handleSearchClick() {
      // ဒီမှာ input value က ဘာမှမပါရင် alert ပြအောင် if နဲ့ စစ်ထား

      if (this.searchValue.trim() !== "") {
        this.$emit("searchBox", {
          value1: true,
          value2: this.searchItems,
        });
      } else {
        alert("Please enter a search value.");
      }
    },
    getType(value) {
      if (this.selectedType !== value) {
        this.selectedType = value;

        this.$emit("selectedType", {
          value1: true,
          value2: this.gettingSelectedItems,
        });
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background: rgba(4, 10, 33, 0.7) !important;
}

.nav-link {
  color: #fff !important;
}

.nav-link:hover {
  color: #ffc107 !important;
}

.btn {
  color: #fff;
  background-color: #28a745;
  border: 2px solid #28a745;
}

.btn:hover {
  background: #218838;
  transition: 0.5s;
}
</style>
