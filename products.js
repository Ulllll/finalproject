Vue.component('products', {
    data(){
        return{
            products: [],
        }
    },
    mounted(){
        let lLength = 0;
        let miniProducts = [];
        $.ajax({
        
          url: `document.json`, 
          contentType: 'json',
          success: function(data) {
            data = JSON.parse(data);
           for (let key in data){
               miniProducts.push(data[key]);
           }
          }
        });
        this.products = miniProducts;
        let key =5;
        console.log(this.products);
    },
    template:`<section class="f-items-flex">  
            <div class="goods" v-for = '(item, index) in products' :key="index">
                <a href="#">
<img :src="products.index" alt="goods"></a>

                <div class="back">
                    <a href="#"><img src="img/cart-white.svg" alt="cart"><p>Add to&nbsp;Cart</p> </a>
                </div>
                <a href="#">
                    <p>{{products.name}}<br><span>\${{products.prise}}</span></p>
                </a>
            </div>
        </section>`
})
