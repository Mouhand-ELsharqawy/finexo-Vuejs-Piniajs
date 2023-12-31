<template>
  <div class="hero_area">

    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="../assets/images/hero-bg.png" alt="">
      </div>
    </div>

    
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <router-link class="navbar-brand" to="index.html">
            <span>
              Finexo
            </span>
          </router-link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <router-link class="nav-link" to= "/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about"> About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/service">Services</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/currency">Currency</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/customer">Customer</router-link>
              </li>
             
              <li class="nav-item">
                <router-link class="nav-link" to="/team">Team</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/testimonial">Testimonial</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/"> <i class="fa fa-user" aria-hidden="true"></i> Login</router-link>
              </li>
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail-box">
                    <h1>
                      Crypto <br>
                      Currency
                    </h1>
                    <p>
                      Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div class="btn-box">
                      <router-link to="" class="btn1">
                        Read More
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="../assets/images/slider-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>

    </section>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>