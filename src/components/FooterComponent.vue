<template>
  
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>
              Address
            </h4>
            <div class="contact_link_box">
              <router-link to="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </router-link>
              <router-link to="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </router-link>
              <router-link to="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </router-link>
            </div>
          </div>
          <div class="info_social">
            <router-link to="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </router-link>
            <router-link to="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </router-link>
            <router-link to="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </router-link>
            <router-link to="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>
              Info
            </h4>
            <p>
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>
              Links
            </h4>
            <div class="info_links">
              <router-link class="active" to="/">
                Home
              </router-link>
              <router-link class="" to="/about">
                About
              </router-link>
              <router-link class="" to="/service">
                Services
              </router-link>
              <router-link class="" to="/testimonial">
                Why Us
              </router-link>
              <router-link class="" to="/team">
                Team
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  


  <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
      </p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>