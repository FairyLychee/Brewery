<template>
  <div class="container-fluid homepage-container position-relative">
    <!-- Home page data. -->
    <!-- <div class="container position-absolute">
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
        Can change everything html and css, can cut or copy router-link 
        but can not change 
        <router-link
          to="/BreweryPage"
          class="btn"
          @click="$emit('loadMore', true)"
          >Load More</router-link
        >
      </div>
    </div> -->
    <div class="row main-content pt-5">
      <div class="col-md-5 mt-2">
        <p class="content-heading pt-5">
          Crafting Exceptional Beers with Passion and Precision
        </p>
        <p class="pt-3 pb-4">
          We believe in the artistry of brewing. With a commitment to quality,
          creativity, and a deep passion for the craft, we invite you to explore
          the world of flavors we've carefully crafted in every sip
        </p>
        <router-link
          to="/BreweryPage"
          class="btn btn-outline-light"
          @click="$emit('loadMore', true)"
          >Load More</router-link
        >
      </div>
      <div class="col-md-4">
        <img src="@/assets/brewery1.png" alt="" />
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
  height: 81.5vh;
  overflow-y: auto;
  background: #0d0d0d;
}
/*
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
*/

.row img {
  height: 520px;
}
.main-content {
  display: flex;
  justify-content: space-around;
  color: white;
}
.main-content .content-heading {
  font-size: 30px;
  font-weight: np;
  font-weight: bold;
  font-family: cursive;
  line-height: 1.5em;
}
.main-content p {
  font-size: 18px;
  font-family: cursive;
  line-height: 2rem;
}
/*
.btn {
  color: #fff;
  padding: 12px 32px;
  background-color: #28a745;
  border: 2px solid #28a745;
}

.btn:hover {
  background: #218838;
  transition: 0.5s;
} */
</style>
