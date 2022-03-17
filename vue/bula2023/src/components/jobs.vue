<template>
    <div id="JobWrapper">
        <div v-for="(value, key) in store.Jobs" :key="key">
            <button style="width: 100%; padding: 0" @click="expanded = (expanded!=key ? key : undefined)">
                <span class="catTitle">
                    <h4>{{key}}</h4>
                    <span class="expandButton">{{expanded == key ? '-' : '+'}}</span>
                </span>
            </button>
            <div v-if="expanded == key">
            <div class="job" v-for="job in value" :key="job.title">
                <div class="description">
                    <h4>{{job.title}}</h4>
                    <p>{{job.description}}</p>
                    <div class="efford">
                        <span style="font-weight: bold">Aufwand: </span>
                        <span>{{job.efford}}</span>
                    </div>
                    <div class="contact">
                        <router-link :to="'/team#'+job.contact">
                            <span>Ansprechpersong: </span>
                            <span>{{job.contact}}</span>
                        </router-link>
                    </div>
                </div>
                <div class="contactImage">
                    <img :src="'/persons/'+job.contact+'.jpg'" class="profilePicture" :alt="job.contact">
                    <img :src="'/borderCycle.png'" class="profilePictureBorder">
                </div>
            </div>
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
        expanded: undefined
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/less/main.less";
.catTitle {
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
.job {
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    border: 0.25rem solid black;
    padding: 1.5rem;
    border-image: url('/jobborder.png') 20% 3% 19% 4% ~"/" 1rem 1rem 1rem 1rem;
    margin: 0.5rem 0;
    .description {
        margin-right: 1rem;
    }
    h4 {
        text-align: left;
        margin: 0;
    }
    .contact {
        font-size: 0.8rem;
        font-weight: bold;
    }
    .efford {
        margin: 1rem 0;
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
    @media (max-width: 30*16px) {
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