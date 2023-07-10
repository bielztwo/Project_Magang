<template>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                keyboard_double_arrow_right
                </span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-symbols-outlined">
                in_home_mode
                </span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/graph" class="button">
                <span class="material-symbols-outlined">
                query_stats
                </span>
                <span class="text">Graph</span>
            </router-link>
            <router-link to="/table" class="button">
                <span class="material-symbols-outlined">
                table_view
                </span>
                <span class="text">Table</span>
            </router-link>
            <router-link to="/recording" class="button">
                <span class="material-symbols-outlined">
                task 
                </span>
                <span class="text">Record</span>
            </router-link>
            <router-link to="/about" class="button">
                <span class="material-symbols-outlined">
                help
                </span>
                <span class="text">About</span>
            </router-link>
            <router-link to="/setting" class="button">
                <span class="material-symbols-outlined">
                settings
                </span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>

aside {
    display: flex;
    flex-direction: column;
    background-color: #CCD5AE;
    width: calc(2rem + 40px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.5s ease-out;

    .flex {
        flex: 2 1 0%;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }
    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.5s ease-out;

        .menu-toggle {
            transition: 0.5s ease-out;
            width: 70px;

            .material-symbol-outlined {
                font-size: 2rem;
                color: var(--light);
                transition: 0.5s ease-out;
            }

            &:hover {
                .material-symbol-outlined {
                    color: var(--primary);
                    transform: translateX(1rem);

                    transition: 0.5s ease-out;
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.5s ease-out;
    }

    h3 {
        color: #023e8a;
        font-size: 23px;
        margin-bottom: 15px;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;
        font-size: 20px;
        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.5s ease-out;
            padding: 0.5rem 1rem;

            .material-symbol-outlined {
                font-size: 5rem;
                color: white;
                transition: 0.5s ease-out;
            }

            .text {
                color: #0096c7;
                margin: 2px;
                padding-left: 20px;
                transition: 0.4s ease-out;
                text-align: right;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-symbol-outlined,
                .text {
                    color: brown;
                }
            }

            &.router-link-exact-active {
                background-color: ivory;
                border-right: 8px solid black;
                margin-left:10px;
                border-radius: 10%;

                .material-symbol-outlined,.text {
                    color: blueviolet;
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.5s ease-out;

        p {
            font-size: 0.875rem;
            color: grey;
        }
    }

    &.is-expanded {
        width: 230px;
        transition: 0.5 ease-out;

        .menu-toggle-wrap {
            top: -3rem;
            transition: 0.7s ease-out;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-symbol-outlined {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>
Footer
© 2023 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

