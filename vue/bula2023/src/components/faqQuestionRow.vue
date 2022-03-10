<template>
    <div>
        <button style="width: 100%; padding: 0" @click="isExpanded = !isExpanded">
            <span class="question">
                <h4>{{question.question}}</h4>
                <span class="expandButton">{{expandButtonContent}}</span>
            </span>
        </button>
        <p v-if="isExpanded" v-html="question.answer"></p>
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
    justify-content: space-between;
    .expandButton {
        font-size: 3rem;
    }
    h4 {
        margin: auto auto auto 0;
        text-align: left;
    }
}
</style>