Vue.component('header-el', {
    data(){
        return {
            
            
        }
    },
    template: ` <div class="container header-flex">
                <div class="header-left">
                <logo></logo>
                <form-header></form-header>
            </div>
<cart></cart>
</div>
`
})
Vue.component('logo',{
    data(){
        return{
            logoSrcPage:'index.html',
            logoImg:'img/logo.png',
        }
    },
    template:` <a class="logo" :href="logoSrcPage"><img class="logo-img" :src="logoImg" alt="logo">BRAN<span class="logo-d">D</span></a>`,
})
Vue.component('form-header', {
              template:`<form class="form" action="#">
                        <div id="browse">Browse <i class="fas fa-caret-down"></i>
                        <div class="menu-browse">
                            <div class="mega-menu">
                                <div class="diff-mini-megs-menu">
                                    <div class="mini-mega-menu">
                                        <div class="h6-mega-menu">
                                            <h6><a href="#">Women</a></h6>
                                        </div>
                                        <a href="#">Dresses</a>
                                        <a href="#">Top</a>
                                        <a href="#">Sweaters/Knits</a>
                                        <a href="#">Jackets/Coats</a>
                                        <a href="#">Blazers</a>
                                        <a href="#">Denim</a>
                                        <a href="#">Leggings/Pants</a>
                                        <a href="#">Skirts/Shorts</a>
                                        <a href="#">Accessories </a>
                                    </div>
                                    <div class="mini-mega-menu">
                                        <div class="h6-mega-menu">
                                            <h6><a href="#">Men</a></h6>
                                        </div>
                                        <a href="#">Tees/Tank tops</a>
                                        <a href="#">Shirts/Polos</a>
                                        <a href="#">Sweaters</a>
                                        <a href="#">Sweatshirts/Hoodies</a>
                                        <a href="#">Blazers</a>
                                        <a href="#">Jackets/vests</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Search for Item...">
                    <a href="#" id="searchImg"><i class="fas fa-search"></i></a>
</form>`
                    
              })
Vue.component('cart', {
    data(){
        return{
            srcImgCart:'img/cart.svg',
        }
    },
    template:`<div class="header-right">
<div class="go-to-cart">
                    <p id="cart"><img :src="srcImgCart" alt="cart"></p>
                    <div class="cart-active">
                        <div class="img-cart">
                            <div class="cart-product-one">
                                <a href="product.html"> <img src="img/imgforcart1.jpg" alt="img of product"></a>
                                <div class="text-for-cart">
                                    <a href="product.html">
                                        <h6>Rebox Zane</h6>
                                    </a>
                                    <p>1&nbsp;<span>x</span> $250</p>
                                </div>
                                <div>
                                    <i class="fas fa-times-circle"></i>
                                </div>
                            </div>
                            <div class="cart-product-one">
                                <a href="product.html"><img src="img/imgforcart2.jpg" alt="img of product"></a>

                                <div class="text-for-cart">
                                    <a href="product.html">
                                        <h6>Rebox Zane</h6>
                                    </a>
                                    <p>1&nbsp;<span>x</span> $250</p>
                                </div>
                                <div>
                                    <i class="fas fa-times-circle"></i>
                                </div>
                            </div>
                            <div class="total-price">
                                <div class="total">
                                    <p>TOTAL </p>
                                </div>
                                <div id="total">
                                    <p>$500.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="link-cart">
                            <a href="checkout.html">Checkout</a>
                            <a href="cart.html">Go&nbsp;to&nbsp;cart</a>

                        </div>

                    </div>
                </div>
                <a class="button" href="#">My&nbsp;Account <i class="fas fa-caret-down"></i></a>
            </div>`
})