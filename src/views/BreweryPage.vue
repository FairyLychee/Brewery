<template>
  <section class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h2 class="mt-5">List of Breweries</h2>
      </div>
      <div>
        <router-link to="/" class="mt-5 btn btn-back">Back</router-link>
      </div>
    </div>
    <div class="row mt-5">
      <!-- check search items and looped searchItems -->
      <template v-if="searchItems.length > 0">
        <!-- card codes are the same (loop လုပ်တဲ့ item ကလွဲလို့ ) -->
        <div
          class="col-md-3 mt-3"
          v-for="(item, index) in searchItems"
          :key="index"
        >
          <div class="card p-2">
            <div class="card-header d-flex flex-wrap">
              <h5>Name: {{ item.name }}</h5>
              <h5>Type: {{ item.brewery_type }}</h5>
            </div>
            <div class="card-body">
              <p>City: {{ item.city }}</p>
              <p>Phone: {{ item.phone }}</p>
              <div class="text-end">
                <router-link
                  :to="{ name: 'BreweryDetail', params: { id: item.id } }"
                  class="btn"
                  >See More</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="selectItems.length > 0">
        <!-- card codes are the same (loop လုပ်တဲ့ item ကလွဲလို့ ) -->
        <div
          class="col-md-3 mt-3"
          v-for="(item, index) in selectItems"
          :key="index"
        >
          <div class="card p-2">
            <div class="card-header d-flex flex-wrap">
              <h5>Name: {{ item.name }}</h5>
              <h5>Type: {{ item.brewery_type }}</h5>
            </div>
            <div class="card-body">
              <p>City: {{ item.city }}</p>
              <p>Phone: {{ item.phone }}</p>
              <div class="text-end">
                <a :href="item.website_url" target="_blank" class="btn"
                  >See More</a
                >
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- card codes are the same (loop လုပ်တဲ့ item ကလွဲလို့ ) -->
        <div
          class="col-md-3 mb-3"
          v-for="(item, index) in brewery"
          :key="index"
        >
          <!-- column တစ်ခုချင်းစီမှာ card တွေထဲ့ -->
          <div class="card p-2">
            <div class="card-header d-flex flex-wrap">
              <h5>Name: {{ item.name }}</h5>
              <h5>Type: {{ item.brewery_type }}</h5>
            </div>
            <div class="card-body">
              <p>City: {{ item.city }}</p>
              <p>Phone: {{ item.phone }}</p>
              <div class="text-end">
                <a :href="item.website_url" target="_blank" class="btn"
                  >See More</a
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "BreweryPage",
  // app.vue ကနေ api data ကို brewery နာမည် attribute နဲ့ ပြောင်းပေး ဒီမှာ props နဲ့ပြန်ဖမ်း
  props: ["brewery", "searchItems", "selectItems"],
};
</script>

<style scoped>
/* card css အတွက် */
.card {
  cursor: pointer;
  height: 300px;
  background: #dbd986 !important;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card-header {
  height: 120px;
}

.card:hover {
  transform: translateY(-5px);
}

.card-header {
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.btn-back {
  color: #fff;
  padding: 12px 32px;
}

.btn {
  color: #fff;
  background-color: #391511;
  border: none;
}

.btn:hover {
  background: black;
  transition: 0.5s;
}
</style>
