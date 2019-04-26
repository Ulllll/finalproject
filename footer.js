Vue.component('footer-el', {
    data(){
        return{
            social: [
                {
                    sImg: 'fab fa-facebook-f',
                    sSrc: '#',
                    id:'',
                    class:'',
                },
                {
                    sImg: 'fab fa-twitter',
                    sSrc: '#',
                    id:'',
                    class:'',
                },
                {
                    sImg: 'fab fa-linkedin-in',
                    sSrc: '#',
                    id:'',
                    class:'unactive',
                },
                {
                    sImg: 'fab fa-pinterest-p',
                    sSrc: '#',
                    id:'',
                    class:'',
                },
                {
                    sImg: 'fab fa-google-plus-g',
                    sSrc: '#',
                    id:'newstyle',
                    class:'',
                },
            ],
            text1: `Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships.
                     `,
            text2: `Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.`
        }
    },
    template :` <footer>
<div class="footer1 container">
            <div>
                <logo></logo>
                <p class="all-info">
                    {{text1}}
                    <br><br><br>
                    {{text2}}
                </p>
            </div>
            <nav class="footer-nav">
                <ul>
                    <li class="first-li"><a href="#">COMPANY</a></li>
                    <li><a href="#">Home </a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">How It&nbsp;Works</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                    <li class="first-li"><a href="#">INFORMATION</a></li>
                    <li><a href="#">Tearms &amp;&nbsp;Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">How to&nbsp;Buy</a></li>
                    <li><a href="#">How to&nbsp;Sell</a></li>
                    <li><a href="#">Promotion</a></li>
                </ul>
                <ul>
                    <li class="first-li"><a href="#">SHOP CATEGORY</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Child</a></li>
                    <li><a href="#">Apparel</a></li>
                    <li><a href="#">Brows All</a></li>
                </ul>
            </nav>
        </div>
        <div class="footer2">
            <div class="footer2-flex container">
                <div>
                    <p>&copy;&nbsp;2017 Brand All Rights Reserved.</p>
                </div>
                <div >
                    <a v-for = "item in social" :href="item.sSrc" :class="item.class"><i :id="item.id" :class="item.sImg" ></i></a>
                    
                </div>
            </div>

        </div>
</footer>`

})