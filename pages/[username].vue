<script setup lang="ts">
const { username } = useRoute().params
const { data: profile } = useFetch(`/api/profiles/${username}`)

const { data: events } = useFetch('/api/events', {
  query: {
    username
  }
})
</script>

<template>
  <CityProfile v-if="profile.type === 'City'" :profile="profile" :events="events" />
  <pre v-else>{{ profile }}</pre>
</template>
