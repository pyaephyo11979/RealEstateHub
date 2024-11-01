<script setup>
import { RouterLink,useRoute } from "vue-router";
const isRouteActive = (routeName) => {
    const route = useRoute();
    return route.path === routeName;
};
</script>
<template>
    <nav class=" bg-cyan-500 px-2 py-3">
        <div class="flex">
            <RouterLink to="/" class="text-2xl font-bold me-auto">HomeLander</RouterLink>
            <div class="flex gap-2 ms-auto ">
                <RouterLink to="/" :class="[isRouteActive('/') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">Home</RouterLink>
                <RouterLink to="/rents" :class="[isRouteActive('/rents') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">Rents</RouterLink>
                <RouterLink to="/properties" :class="[isRouteActive('/properties') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">Properties</RouterLink>
                <RouterLink to="/projects" :class="[isRouteActive('/projects') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">Projects</RouterLink>
                <RouterLink to="/services" :class="[isRouteActive('/services') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">Services</RouterLink>
                <RouterLink to="/about" :class="[isRouteActive('/about') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">About</RouterLink>
                <RouterLink to="/contact" :class="[isRouteActive('/contact') ? 'bg-cyan-900 hover:bg-gray-700':'hover:bg-cyan-900','text-white','text-lg','rounded-lg','p-2']">Contact</RouterLink>
            </div>
        </div>
    </nav>
</template>