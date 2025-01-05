<template>
    <div>
        <nav>
            <ul id="barra">
                <li>
                    inicio
                </li>
                <li>
                    productos
                </li>
                <li>
                    salir
                </li>
            </ul>
            <h1>Pruebas</h1>
            <p>Esto es una prueba</p>

        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#barra {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
li{
    margin: 10px;
}
div{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #333;
    color: white;
    list-style: none;
    padding: 10px;
    margin: 0;
}
nav{
    width: 100%;
}
</style>