<template>
    <div>
        <nav id="bar">
            <div id="contenedor">
                <button id="Stilo">Stilo</button>
                <ul id="barra">
                    <a href=""></a>
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
            </div>
        </nav>
        <h1>Pruebas</h1>
        <p>Esto es una prueba</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#bar{
    width: 100%;
    height: 100%;
}
#barra{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 15px;
}
#contenedor{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    background-color: #df77df;
    color: white;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 10px #302c2b;
    vertical-align: top;
}
#Stilo{
    background-color: #df77df;
    color: #ffd9c2;
    border: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
}
#Stilo:active{
    color: #302c2b;
}
#Stilo:hover{
    color: #302c2b;
    transition: 0.5s;
}
div{
    width: 100%;
    height: 100%;
    background-color: rgb(250, 249, 247);
}
nav{
    font-size: 16px;
    font-family: Arial, sans-serif;
}
li{
    margin: 0 30px;
    color: #ffd9c2;
    font-weight: bold;
    transition:0.5s;
    cursor: pointer;
    font-size: 20px;
}
li:hover{
    color: #302c2b;
    transition:0.5s
}

</style>