<template>
  <div >
    <div class="nav-box">

      <div class="nav-left">
        <a class="logo-main" href="/" >
            <div class="logo-box">
            <img class="logo" src="../assets/icons/logo.png" alt="">
            <h2 class=" fw-bolder">Logo</h2>
          </div>
        </a>
        <a class="nav-links fw-bolder" href="/">Home</a>
        
      </div>

      <div class="nav-right">
        <a  href="/cart">
          <div class="nav-cart"><img src="../assets/icons/cart.png" alt=""></div>
        </a>
      </div>
    </div>

  </div>
</template>
    
<script>

</script>
    
<style>
.nav-box {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
}

.logo-box {
  width: 150px;
  height: 40px;
  margin-right: 50px;
  display: flex
}

.logo-main{
  text-decoration: none;
  color: black;
}

.nav-cart {
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border: #2B57DC solid;
  border-radius: 10px;

}

.nav-cart img {
  max-width: 100%;
  max-height: 100%;

}

.nav-left {
  display: flex;
  align-items: center;

}

.nav-links {
  margin-right: 30px;
  text-decoration: none;
  color: black;
}

.nav-right{
  align-items: flex-end;
}
  

@media only screen and (max-width: 576px){
 

}


</style>