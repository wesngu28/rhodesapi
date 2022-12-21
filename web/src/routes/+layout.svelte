<script>
	import Navbar from '../components/Navbar.svelte';
	import '../assets/main.css';
</script>

<svelte:head>
	<meta name="rating" content="general" />
  <meta name="lang" content="en-us" />
  <meta property="og:title" content="RhodesAPI" />
  <meta property="og:description" content="Web interface for an api for Arknights" />
  <meta property="og:image" content="/Arknights.jpg" />
  <meta name="twitter:title" content="RhodesAPI" />
  <meta name="twitter:description" content="Web interface for an api for Arknights" />
  <meta name="twitter:image" content="/Arknights.jpg" />
  <meta name="twitter:creator" content="wesngu28" />
  <meta name="keywords" content="arknights, api" />
</svelte:head>
<Navbar />
<slot />
