<template>
  <div>
    <div class="item-title">
      <h1 class="text-center fw-bolder">{{ selectedItem[0].name }}</h1>
    </div>
    <div class="item-home-box row" style="margin: auto;">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <img class="item-image" :src="require('../assets/items/' + selectedItem[0].image)" alt="item" />
      </div>

      <div class="item-right col-lg-6 col-md-6 col-sm-12">
        <p>{{ selectedItem[0].text }}</p>

        <div class="price-rating-wrapper">
          <h1 class="">{{ selectedItem[0].price }}</h1>
          <div class="cart-rating-box">
            <h4>{{ selectedItem[0].rating }}</h4>
            <button @click="test()" class="item-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<div>

</div>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      selectedItem: [],
      items: [
        {
          name: "Headset",
          price: "$40",
          image: "headset.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Mouse",
          price: "$10",
          image: "mouse.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Camera",
          price: "$250",
          image: "camera.jpg",
          text: "Lorem Ipsum is simply standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Smart watch",
          price: "$25",
          image: "smart-watch.jpg",
          text: "Lorem Ipsum text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },

        {
          name: "Calculator",
          price: "$20",
          image: "calculator.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions long established fact that a reader will be distracted.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Gaming headset",
          price: "$50",
          image: "gaming-headset.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclumore-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Keyboard",
          price: "$15",
          image: "keyboard.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Sd card",
          price: "$10",
          image: "sd-card.jpg",
          text: "Lorem since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters..",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },

        {
          name: "Speaker",
          price: "$20",
          image: "speaker.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Power-bank",
          price: "$10",
          image: "power-bank.jpg",
          text: "Lorem Ipsum and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Handsfree",
          price: "$10",
          image: "handsfree.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at it",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
        {
          name: "Pendrive",
          price: "$10",
          image: "pendrive.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
          cart_btn: "Add to Cart",
          rating: "5.0",
        },
      ],
      id: this.$route.params.id,
    };
  },
  created() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.id == this.items[i].name) {
        this.selectedItem.push(this.items[i]);
      }
    }
  },

  methods: {
    addcart() {
      console.log(this.selectedItem[0].name);
    },

    test() {

      let currentItems = [];

      if (localStorage.getItem("items") !== null) {
        if (localStorage.getItem("items") != '') {
          currentItems = JSON.parse(localStorage.getItem("items"));
        }
      }

      currentItems.push(this.selectedItem[0]);
      console.log(currentItems)
      localStorage.removeItem('items');
      localStorage.setItem('items', JSON.stringify(currentItems));

      Swal.fire({
        title: "Success..!",
        text: "A new item has been added to your Shopping Cart.",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "View Shopping Cart",
        cancelButtonText: "Continune Shopping",
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/cart");
          } else {
            return;
          }
        });
    },

    itemSelect(index) {
      this.$router.push("/item/" + this.items[index].name);
    },



  },
};
</script>

<style>
.row,
.col-lg-6,
.col-md-6,
.col-sm-12,
.item-home-box,
.item-right,
.item-image {
  margin: 0px;
}

.item-home-box {
  padding-left: 50px;
  padding-top: 50px;
}

.item-right {
  width: 500px;
  padding: 20px;
}

.item-image {
  width: 100%;
  padding: 20px;
}

.price-rating-wrapper {
  display: flex;
  justify-content: space-between;
}


@media only screen and (max-width: 576px) {
  .item-home-box .row {

    padding: 50px;
    margin: auto;
  }

  .item-image {
    width: 300px;
  }
}
</style>
