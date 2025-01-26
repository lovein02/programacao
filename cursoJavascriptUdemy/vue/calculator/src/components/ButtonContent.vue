<template>
    <div class="button"
        @click="$emit('onClick', label)"
        :class="{ double, triple, operation }">
        {{ label }}
    </div>
</template>

<script>
export default {
	props: {
		label: {
			type: String, required: true,
			},
			operation: {
			type: Boolean, default: false,
			},
			double: {
			type: Boolean, default: false,
			},
			triple: {
			type: Boolean, default: false,
			}
		}
	}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}
.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    display: flex;
    align-items: center;
    justify-content: center;
    color:#575757
}
.button:active{
    background-color: #ccc;
    color:#292929
}
.button.double{
    grid-column: span 2;
}
.button.triple{
    grid-column: span 3;
}
.button.operation{
    background: #fa8231;
    color: white;
}
.button.operation:active{
    background-color:#fa8231cc;
}
</style>