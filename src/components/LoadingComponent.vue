<template>
  <div class="loading-page d-flex justify-content-center align-items-center">
    <img :src="require('@/assets/loading.gif')" alt="Loading" />
    <div>
      <h3 class="loading-text ms-5 mt-3">ကျွန်တော်ပြေးနေရပြီ...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
};
</script>

<style scoped>
.loading-page {
  height: 93vh;
  flex-direction: column;
}

.loading-text {
  font-weight: 600;
  opacity: 0;
  animation: fadeInOut 1.5s ease-in-out infinite;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
