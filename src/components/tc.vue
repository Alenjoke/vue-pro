<template>
    <div>
        <slot name="Big"></slot>
        <h2><slot></slot></h2>
        <div style="color: red"><slot name="red"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'mycom'
}
</script>