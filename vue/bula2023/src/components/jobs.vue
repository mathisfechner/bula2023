<template>
    <div id="Jobs" :class="[expanded ? 'cluster' : 'row']">
        <div class="job" v-for="job in store.Jobs" :key="job.title">
            <div class="description">
                <h4>{{job.title}}</h4>
                <p>{{job.description}}</p>
                <div class="contact">
                    <span>Ansprechpartner: </span>
                    <span>{{job.contact}}</span>
                </div>
            </div>
            <div class="contactImage">
                <img :src="'/persons/'+job.contact+'.jpeg'" class="profilePicture" :alt="job.contact">
                <img :src="'/borderCycle.png'" class="profilePictureBorder">
            </div>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixin.js'

export default {
  mixins: [mixin],
  props: {
  },
  computed: {
  },
  data() {
    return{
    }
  }
}
</script>

<style lang="less">
@import "~@/less/main.less";
.job {
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    border: 0.25rem solid black;
    padding: 1.5rem;
    border-image: url('/jobborder.png') 20% 3% 19% 4% ~"/" 1rem 1rem 1rem 1rem;
    .description {
        margin-right: 1rem;
    }
    h4 {
        text-align: left;
    }
    .contact {
        font-size: 0.8rem;
        font-weight: bold;
    }
    .contactImage {
        position: relative;
        img.profilePicture {
            width: 7rem;
            clip-path: circle();
        }
        img.profilePictureBorder {
            position: absolute;
            width: 7.2rem;
            left: -0.1rem;
            top: -0.1rem;
        }
    }
    @media (max-width: 30rem) {
        flex-direction: column;
        .contactImage {
            align-self: center;
            margin-top: 1rem;
            img.profilePicture {
                width: 7rem;
            }
            img.profilePictureBorder {
                width: 7.2rem;
            }
        }
    }
}
</style>