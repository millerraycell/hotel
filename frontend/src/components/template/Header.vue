<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class ="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
                {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    name : "Header",
    props: {
        title: String,
        hideToggle: Boolean
    },
    computed:{
        icon(){
            return "fa-angle-left"
        }
    },
    methods:{
        toggleMenu(){
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #2f65d1, #38c7ee);
        
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .title{
        font-size: 1.4rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a{
        color: #ffffff;
        text-decoration: none;
    }

    header.header > a.toggle{
        width: 60px;
        height: 100%;
        color: #FFF;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover{
        color : #FFF;
        background-color: rgba(0, 0, 0, 0.2)
    }
</style>