<template>
  <div class="min-h-screen flex items-center justify-center relative">
    <img 
      src="@/assets/backend.jpeg" 
      alt="Background" 
      class="absolute inset-0 w-full h-full object-cover" 
    />
    <div class="bg-white bg-opacity-30 rounded-lg shadow-lg p-8 w-full max-w-md space-y-6 relative z-10">
      <h1 class="text-5xl font-bold text-center text-gray-900">Multi-Step Form</h1>
      <h3 class="text-lg text-center text-gray-900">Step 1: Basic Information</h3>

      <!-- Name Input -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          placeholder="Enter your name"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-40"
          required
        />
      </div>

      <!-- Email Input -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>

      <!-- Phone Number Input -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-900">Phone Number</label>
        <input
          v-model="phoneNumber"
          @input="formatPhoneNumber"
          type="text"
          id="phone"
          placeholder="90 123 45 67"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
        <div v-if="errors.phoneNumber" class="text-red-500 text-sm mt-1">{{ errors.phoneNumber }}</div>
      </div>

      <!-- Role Selector -->
      <div>
        <label for="roles" class="block text-sm font-medium text-gray-900">Select Role</label>
        <select
          v-model="role"
          id="roles"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
      </div>

      <!-- Next Step Button -->
      <div class="text-center">
        <button
          @click="goToNextStep"
          class="mt-4 w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { useForm } from 'vee-validate';

// Router for navigation
const router = useRouter();

// Reactive form fields
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const role = ref('');

// Define validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^\d{2} \d{3} \d{2} \d{2}$/, 'Phone number must be in the format 90 123 45 67')
    .required('Phone number is required'),
});

// Use the `useForm` hook to bind the schema
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const formatPhoneNumber = (event) => {
  const input = event.target.value.replace(/\D/g, ''); // Faqat raqamlarni qoldiring
  const formatted = input
    .replace(/(\d{2})(\d)/, '$1 $2') // Birinchi ikkita raqamdan keyin bo'sh joy
    .replace(/(\d{3})(\d)/, '$1 $2') // Keyingi uchta raqamdan keyin bo'sh joy
    .replace(/(\d{2})(\d)/, '$1 $2') // Keyingi ikkita raqamdan keyin bo'sh joy
    .trim(); // Qo'shimcha bo'sh joylarni olib tashlang

  phoneNumber.value = formatted; // Formatted raqamni kiritish
};

// Submit handler
const goToNextStep = handleSubmit((values) => {
  console.log('Form submitted', values);
  router.push({ name: 'nextStep' });
});
</script>

<style scoped>

</style>
