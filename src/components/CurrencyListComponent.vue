<template>
     <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="../assets/images/s1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                 {{ data.currency.title }}
                </h5>
                <p>
                  {{ data.currency.body }}
                </p>
                <router-link :to="{ name: 'singlecurrency', query: { id: data.currency.id } }">
                  <button type="button" class="btn btn-primary">
                    Read More
                  </button>
                </router-link>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    props: ['data']
}
</script>