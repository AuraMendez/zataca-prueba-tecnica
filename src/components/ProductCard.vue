<template>
    <div class="product-card">
        <h1>{{ title }}</h1>
        <p>User: {{ userId }}</p>
        <p>{{ body }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    data() {
        return {}
    },
    props: {
        id: Number,
        title: String,
        body: String,
        userId: Number,
    }
}
</script>