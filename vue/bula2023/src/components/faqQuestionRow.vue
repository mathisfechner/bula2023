<template>
    <div>
        <div class="question">
            <h4>{{question.question}}</h4>
            <button class="expandButton" @click="isExpanded = !isExpanded">{{expandButtonContent}}</button>
        </div>
        <p v-if="isExpanded">{{question.answer}}</p>
    </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
    mixins: [mixin],
    props: {
        question: Object
    },
    computed: {
        expandButtonContent: function() {
            return this.isExpanded ? '-' : '+';
        }
    },
    data () {
        return {
            isExpanded: false,
        }
    }
}
</script>

<style lang="less">
@import "~@/less/main.less";

.question {
    display: flex;
    align-content: center;
    .expandButton {
        font-size: 3rem;
    }
    h4 {
        margin: auto auto auto 0;
    }
}
</style>