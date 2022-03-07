<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-emerald-500 text-gray-700">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="tracking-tighter text-3xl font-thin">
        <span class="font-bold">F</span>ruit
        <span class="font-bold">T</span>racker
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <router-link to="/">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
              "
            >
              Home
            </li></router-link
          >
          <router-link :to="{ name: 'About' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
              "
            >
              About
            </li></router-link
          >
          <router-link :to="{ name: 'faq' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
              "
            >
              FAQ
            </li></router-link
          >
          <router-link :to="{ name: 'contact' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
              "
            >
              Contact
            </li></router-link
          >
          <router-link
            v-if="!isAuthenticated"
            :to="{ path: '/login', name: 'Login' }"
          >
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
              "
            >
              Login
            </li></router-link
          >
          <div v-else class="flex">
            <router-link :to="{ name: 'myFruitStand' }">
              <li
                class="
                  py-8
                  px-4
                  hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
                "
              >
                MyFruitStand
              </li></router-link
            >
            <router-link :to="{ name: 'trending' }">
              <li
                class="
                  py-8
                  px-4
                  hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
                "
              >
                Trending
              </li></router-link
            >
            <router-link :to="{ name: 'fruitToday' }">
              <li
                class="
                  py-8
                  px-4
                  hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
                "
              >
                Fruit Today
              </li></router-link
            >
            <button @click="loggingOut">
              <li
                class="
                  px-4
                  py-8
                  hover:cursor-pointer hover:bg-gray-400 hover:text-yellow-900
                "
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>