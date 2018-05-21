<template>
    <game></game>
</template>

<script>
import Game from '~/components/Game'

export default {
    components: {
        Game
    },

    head(){
        return {
            title: 'Game'
        }
    }
}
</script>