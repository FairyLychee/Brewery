<template>
  <div class="container-fluid homepage-container position-relative">
    <!-- Home page data. -->
    <div class="container position-absolute">
      <h1 class="mb-5">Breweries</h1>
      <p class="mt-3 mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus
        quaerat totam aperiam. Eos aspernatur provident repudiandae voluptatem
        omnis beatae itaque officia pariatur, et ipsum odio expedita
        reprehenderit qui. Fugit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Architecto voluptas, eos sapiente eum quam aliquid a
        minima error vero ratione nostrum suscipit, expedita saepe, dignissimos
        ex maiores quos nam eius. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni dolore a voluptate officiis quasi, soluta
        commodi deleniti est corporis blanditiis iusto. Ab ipsam consequatur
        tempore? Est sunt dolor doloremque itaque.
      </p>
      <div class="my-5">
        <!-- Can change everything html and css, can cut or copy router-link 
        but can not change -->
        <router-link
          to="/BreweryPage"
          class="btn"
          @click="$emit('loadMore', true)"
          >Load More</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: ["brewery"],
};
</script>

<style scoped>
.homepage-container {
  width: 100%;
  height: 93vh;
  overflow-y: auto;
}

.container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 63px;
  font-weight: 600;
}
p {
  font-size: 18px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
}

.btn {
  color: #fff;
  padding: 12px 32px;
  background-color: #28a745;
  border: 2px solid #28a745;
}

.btn:hover {
  background: #218838;
  transition: 0.5s;
}
</style>
