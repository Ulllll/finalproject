Vue.component('mega-menu',{
    data(){
        return{
            menu: [
                {
                mSrc:"index.html",
                name: 'Home',
                    id:' ',
                    another: false,
                },
                {
                mSrc:"catalog.html",
                name: 'Man',
                    id:' ',
                    another: false,
                },
                {
                mSrc:"#",
                name: 'Women',
                    id:'women-menu',
                    another: true,
                },
                {
                mSrc:"#",
                name: 'Kids',
                    id:' ',
                    another: false,
                },
                {
                mSrc:"#",
                name: 'Accoseriese',
                    id:' ',
                    another: false,
                },
                {
                mSrc:"#",
                name: 'Featured',
                    id:' ',
                    another: false,
                },
                {
                mSrc:"#",
                name: 'Hot Deals',
                    id:' ',
                    another: false,
                },
                
            ]
        }
    },
    template:`<div class="more-menu container">
            <ul class="menu" >
               
                <li v-for = "item in menu" :id = 'item.id'>
                <template v-if = "!item.another"><a  :href='item.mSrc' class="menu-link">{{item.name}}</a></template>
                <template v-else><a  :href='item.mSrc' class="menu-link">{{item.name}}</a><menu-in-menu></menu-in-menu></template></li>
                
            </ul>
        </div>`
})
Vue.component('menu-in-menu', {
    template:` <div id="women-menu-open">
                        <div class="mega-menu">
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
                            <div class="diff-mini-megs-menu">
                                <div class="mini-mega-menu">
                                    <div class="h6-mega-menu">
                                        <h6><a href="#">Women</a></h6>
                                    </div>
                                    <a href="#">Dresses</a>
                                    <a href="#">Top</a>
                                    <a href="#">Sweaters/Knits</a>
                                    <a href="#">Jackets/Coats</a>
                                </div>
                                <div class="mini-mega-menu">
                                    <div class="h6-mega-menu">
                                        <h6><a href="#">Women</a></h6>
                                    </div>
                                    <a href="#">Dresses</a>
                                    <a href="#">Top</a>
                                    <a href="#">Sweaters/Knits</a>
                                </div>
                            </div>
                            <div class="diff-mini-megs-menu">
                                <div class="mini-mega-menu">
                                    <div class="h6-mega-menu">
                                        <h6><a href="#">Women</a></h6>
                                    </div>
                                    <a href="#">Dresses</a>
                                    <a href="#">Top</a>
                                    <a href="#">Sweaters/Knits</a>
                                    <a href="#">Jackets/Coats</a>
                                </div>
                                <div class="mini-mega-menu">
                                    <a href="catalog.html" id="mega-menu-img">
                                        <p>Super sale!</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`
})