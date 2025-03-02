// features/language/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  translations: {
    en: {
      welcome: "Welcome",
      toint:'To IntelliAnnonce',
      subtitle: "Buy And Sell Everything From Used Cars To Mobile Phones And<br />Computers, Or Search For Property, Jobs And More",
      browseAds: "Browse Ads",
      postAd: "Post an Ad",
      selectCity: "Select a City",
      cities: ["Tanger", "Rabat", "Fès"],
      selectCategory: "Select a Category",
      categories: [
        "Multimedia", "Household Appliances", "Sport", 
        "Pets", "Home And Garden", "Clothes", 
        "Work And Study", "Vehicles"
      ],
      search: "Search",
      popularCategories: "Popular Categories",
      viewAllCategories: "View All Categories",
      recentAds: "Recently Published Ads",
      viewAllAds: "View All Ads",
      featuredAds: "Popular and Featured Ads",
      sellSafely: "Sell Your Item Safely",
      buyDirectly: "Buy Directly",
      friendlyPlatform: "Friendly Platform",
      payInPerson: "Pay in Person",
      support247: "24/7 Support",
      verifiedUsers: "Verified Users",
      featureDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      joinUsTitle: "You want join us  and sell your products?",
      joinUsSubtitle: "Just 4 easy steps",
      createAccount: "Create your Account",
      chooseProduct: "Choose Product",
      fillForm: "Fill the form",
      postAnnounce: "Post Them",
      accountDesc: "create your account for free",
      productDesc: "choose any product  you to sell",
      formDesc: "fill up the form for  create an announce",
      postDesc: "And finally post your announce successfully",
      hereForYou: "IntilliAnnounce Here for You"
    },
    fr: {
      welcome: "Bienvenue",
      toint:"sur IntelliAnnonce",
      subtitle: "Achetez et vendez tout des voitures d'occasion aux téléphones portables<br />et ordinateurs, ou recherchez des biens immobiliers, emplois et plus",
      browseAds: "Voir annonces",
      postAd: "Poster annonce",
      selectCity: "Sélectionner une ville",
      cities: ["Tanger", "Rabat", "Fès"],
      selectCategory: "Sélectionner une catégorie",
      categories: [
        "Multimédia", "Électroménager", "Sport", 
        "Animaux", "Maison et Jardin", "Vêtements", 
        "Travail et Étude", "Véhicules"
      ],
      search: "Rechercher",
      popularCategories: "Catégories populaires",
      viewAllCategories: "Voir toutes les catégories",
      recentAds: "Annonces récentes",
      viewAllAds: "Voir toutes les annonces",
      featuredAds: "Annonces populaires et en vedette",
      sellSafely: "Vendez en toute sécurité",
      buyDirectly: "Achetez directement",
      friendlyPlatform: "Plateforme conviviale",
      payInPerson: "Payer en personne",
      support247: "Support 24/7",
      verifiedUsers: "Utilisateurs vérifiés",
      featureDesc: "Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed",
      joinUsTitle: "Vous voulez nous rejoindre <br /> et vendre vos produits?",
      joinUsSubtitle: "Juste 4 étapes simples",
      createAccount: "Créez votre compte",
      chooseProduct: "Choisir un produit",
      fillForm: "Remplir le formulaire",
      postAnnounce: "Publier l'annonce",
      accountDesc: "créez votre compte <br /> gratuitement",
      productDesc: "choisissez n'importe quel <br /> produit à vendre",
      formDesc: "remplissez le formulaire <br /> pour créer une annonce",
      postDesc: "Et enfin publiez votre <br /> annonce avec succès",
      hereForYou: "IntilliAnnounce <br /> Ici pour vous"
    },
    es: {
      welcome: "Bienvenido",
      toint:'a IntelliAnnonce',
      subtitle: "Compra y vende de todo desde coches usados hasta teléfonos móviles y<br />computadoras, o busca propiedades, trabajos y más",
      browseAds: "Explorar anuncios",
      postAd: "Publicar anuncio",
      selectCity: "Seleccionar ciudad",
      cities: ["Tánger", "Rabat", "Fez"],
      selectCategory: "Seleccionar categoría",
      categories: [
        "Multimedia", "Electrodomésticos", "Deportes", 
        "Mascotas", "Hogar y Jardín", "Ropa", 
        "Trabajo y Estudio", "Vehículos"
      ],
      search: "Buscar",
      popularCategories: "Categorías populares",
      viewAllCategories: "Ver todas las categorías",
      recentAds: "Anuncios recientes",
      viewAllAds: "Ver todos los anuncios",
      featuredAds: "Anuncios populares y destacados",
      sellSafely: "Vende tu artículo de forma segura",
      buyDirectly: "Compra directamente",
      friendlyPlatform: "Plataforma amigable",
      payInPerson: "Pagar en persona",
      support247: "Soporte 24/7",
      verifiedUsers: "Usuarios verificados",
      featureDesc: "Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed",
      joinUsTitle: "¿Quieres unirte a nosotros <br /> y vender tus productos?",
      joinUsSubtitle: "Solo 4 sencillos pasos",
      createAccount: "Crea tu cuenta",
      chooseProduct: "Elegir producto",
      fillForm: "Rellenar formulario",
      postAnnounce: "Publicar anuncio",
      accountDesc: "crea tu cuenta <br /> gratuitamente",
      productDesc: "elige cualquier producto <br /> que quieras vender",
      formDesc: "rellena el formulario <br /> para crear un anuncio",
      postDesc: "Y finalmente publica tu <br /> anuncio con éxito",
      hereForYou: "IntilliAnnounce <br /> Aquí para ti"
    }
  }
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;