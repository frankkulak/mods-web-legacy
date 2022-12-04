<template>
    <div id="app">
        <b-navbar toggleable="md" sticky class="py-3 px-4">
            <b-navbar-brand to="/">Legacy STBL Tools</b-navbar-brand>

            <div id="theme-switcher" class="ml-md-2" @click="changeTheme">
                <b-icon-moon v-if="isDarkTheme"/>
                <b-icon-sun v-else/>
            </div>
        </b-navbar>

        <router-view></router-view>
    </div>
</template>

<script>
    import { BIconMoon, BIconSun } from "bootstrap-vue";
    export default {
        name: 'App',
        components: {BIconSun, BIconMoon},
        data() {
            return {
                isDarkTheme: undefined
            }
        },
        created() {
            this.isDarkTheme = localStorage.getItem('fkmods_IsDarkTheme') === "true";
            document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
        },
        methods: {
            changeTheme() {
                this.isDarkTheme = !this.isDarkTheme;
                document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
                localStorage.setItem('fkmods_IsDarkTheme', this.isDarkTheme);
            }
        }
    }
</script>

<style lang="scss">
    nav {
        justify-content: space-between !important;
        box-shadow: 0 4px 8px var(--shadow-color);
        background-color: var(--nav-bg);

        a, a:hover, a:focus {
            text-decoration: none;
        }

        a.navbar-brand {
            font-weight: bold;
            color: var(--text-color) !important;
        }

        #theme-switcher {
            font-size: 1.5em;
            opacity: 0.6;

            &:hover {
                cursor: pointer;
                opacity: 1;
            }
        }
    }
</style>
