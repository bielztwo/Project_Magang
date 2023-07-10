<template>
    <div class="dashboard">
      <div class="headerin">
        <h1>Automated Hidroponic using Internet of Things</h1>
      </div>
      <div class="parallax-container">
        <div class="parallax-image">
          <img src="../assets/Image.jpg">
        </div>
          <div class="parallax-content">
            <!-- Your website content here -->
            <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense 
          It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.
          It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.
          Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .
          When referring to Lorem ipsum, different expressions are used, namely fill text , fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
          </p>
          </div>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>


.dashboard{
  display: flex;
  height: auto;
  flex-direction: column;
}
.parallax-container {
  position: relative;
  overflow: hidden;
  display: flex;
  max-width: 100%;
}

.parallax-image {
  width: 800px;
  height: 50px;
  transform: translate3d(0, 0, 0);
  z-index: -1;
  padding: 20px;
}
img{
  max-width: 100%;
}

.parallax-content {
  width: 400px;
  padding: 20px;
  /* Add your styles for the content area here */
 /* Adjust the value to match the height of the parallax image */
}
.headerin{
  height: 10%;
}


</style>
