<template>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="../assets/images/client1.jpg" alt="" class="box-img">
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      LusDen
                    </h6>
                    <p>
                      {{ data.test.title }}
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  {{ data.test.body }}
                </p>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    props: ['data']
}
</script>