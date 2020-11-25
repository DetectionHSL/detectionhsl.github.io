<template>
        <ul class="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="https://github.com/DetectionHSL" target="_blank">GitHub</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
.navbar {
    background-color: #333;
    overflow: hidden;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
   
   
     
    
}
a:hover {
    color: lightgreen;
}       
a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;      
}
</style>