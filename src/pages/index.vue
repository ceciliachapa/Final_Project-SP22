<script setup></script>

<script setup>
import userAuth from "../composable/useAuth";
const { isAuthenticated, user } = userAuth();
</script>

<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      space-y-20
      min-h-screen-nonav
    "
  >
    <h2
      v-if="!isAuthenticated"
      class="text-6xl font-bold text-gray-800 text-center"
    >
      <h2 class="bg-white tracking-tighter">Welcome</h2>
      <br />
      <img src="../assets/titlebanner.png" width="800" alt="Hello" />
    </h2>
    <h2 v-else>
      <h2 class="bg-gray-100 text-6xl tracking-tighter font-bold text-center">
        <p>Welcome {{ user }}...</p>
      </h2>
      <br />
      <div><img src="../assets/titlebanner.png" width="800" alt="Hello" /></div>
    </h2>
  </div>
</template> 