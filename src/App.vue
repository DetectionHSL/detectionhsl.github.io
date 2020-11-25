<template>
<navbar @update="updateLang"/>
<h3 class="center"> 
  {{ description }}
</h3>
</template>

<script>
import navbar from "./components/Navbar"
export default {
  name: 'App',
  components: {
    navbar
  },
  data() {
    return {
      description: 'DetectionHSL is a script written in PowerShell which has the goal to get some informations about a computer running Windows or Linux to remotely solve technical issues. It is designed to filter informations to protect the user privacy and is based on a modules system which allows anyone to easily add / disable functionalities. It includes some utilities which contain useful functionnalities (installing a package, detecting the presence of a software...) and a CLI which permit to easily configure it.',
      lang: 'en',
      frdesc: 'DetectionHSL est un script écrit en PowerShell qui a pour but de récupérer des informations sur un ordinateur sous Windows ou Linux dans le cadre, par exemple, de dépannage informatique à distance. De plus, il est conçu pour filtrer les informations qu\'il produit afin de protéger un maximum la vie privée des utilisateurs. Il est basé sur un système de "modules" qui permettent à n\'importe qui de lui rajouter des fonctionnalités / d\'en désactiver assez facilement. Il dispose aussi d\'un certain nombre d\'utilitaires contenant des fonctions utiles(installation d\'un paquet, detection de la présence d\'un logiciel,...). Il dispose d\'une interface en CLI qui permet de le configurer de façon simple. ',
      endesc: 'DetectionHSL is a script written in PowerShell which has the goal to get some informations about a computer running Windows or Linux to remotely solve technical issues. It is designed to filter informations to protect the user privacy and is based on a modules system which allows anyone to easily add / disable functionalities. It includes some utilities which contain useful functionnalities (installing a package, detecting the presence of a software...) and a CLI which permit to easily configure it.'
    }
  },
  methods: {
    updateLang() {
      this.lang = this.lang === "en" ? "fr" : "en"
      this.description = this.lang === "en" ? this.endesc : this.frdesc
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
div, body, html{
  padding: 0;
  display: block;
  margin-top: 0px;
  overflow: hidden;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.center {
  text-align: center;
  align-self: center;
}
</style>
