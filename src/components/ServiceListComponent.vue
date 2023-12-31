<template>
<div class="row">
        <div class="col-md-4" style="display: flex">
            <div class="box">
              <div class="img-box">
                <img src="../assets/images/s1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  {{ data.service.title }}
                </h5>
                <p>
                  {{ data.service.body }}
                </p>
                <router-link :to="{ name: 'singleservice', query: {id: data.service.id }}">
                  <button type="button" class="btn btn-primary">
                    Read More
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    props: ['data']
}
</script>