<template>
    <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="../assets/images/team-1.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  {{ data.customer.title }}
                </h5>
                <p>
                  {{ data.customer.body }}
                </p>
              </div>
              <div class="social_box">
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
                <router-link to="">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </router-link>
              </div>
                <router-link :to="{ name: 'singlecustomer', query: { id: data.customer.id } }">
                  <button type="button" class="btn btn-primary">
                    Read More
                  </button>
                </router-link>
            </div>
          </div>
</template>

<script>
export default {
    props: ['data']
}
</script>