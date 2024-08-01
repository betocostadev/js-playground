<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['selected-country'])

const selectedCountry = ref('All')
const countries = ref([
  { code: 'All', flag: 'All' },
  { code: 'au', flag: '🇦🇺' },
  { code: 'br', flag: '🇧🇷' },
  { code: 'ca', flag: '🇨🇦' },
  { code: 'fi', flag: '🇫🇮' },
  { code: 'us', flag: '🇺🇸' },
])

const handleCountrySelect = (countryCode: string) => {
  console.log('Change country to:', countryCode)
  selectedCountry.value = countryCode
  console.log(selectedCountry.value)
  emit('selected-country', selectedCountry.value)
}

const handleOptionStyle = (countryCode: string) => {
  return {
    'selected-option': selectedCountry.value === countryCode,
    'country-option': true,
  }
}
</script>

<template>
  <div>
    <p class="filter-text">Filter by country</p>
    <div class="options-container">
      <button
        v-for="country in countries"
        :key="country.code"
        :class="handleOptionStyle(country.code)"
        @click="handleCountrySelect(country.code)"
      >
        {{ country.flag }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.filter-text {
  font-size: 16px;
  margin-bottom: 16px;
}

.options-container {
  display: flex;
  gap: 14px;
}

.country-option {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.selected-option {
  background-color: #3498db;
  color: white;
}
</style>
