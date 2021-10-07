const product = {
    props: ['product'],
    data() {
        return {
            /**
             * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
             * то мы легко можем получить доступ к ним используя свойство $root.
             * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
             */
            cartAPI: this.$root.$refs.cart, // добираемся до компонента корзины, чтобы далее использовать метод добавления
        };
    },

    template: `
    <div class="b-card__item" data-color="#F85D37">
         <div class="b-card__block">
            <picture> <img :src="product.img" alt="phone"></picture>
         </div>
         <div class="b-card__block">
            <div class="b-card__type">
               <p>{{product.product_type}}</p>  
            </div>
            <div class="b-card__name">
               <p>{{product.product_name}},{{product.memory}} ГБ, {{product.color}}</p>
            </div>
            <div class="b-card__price"> <span class="b-card__actual">{{product.price}}</span></div>
            <div class="b-card__bot">
               <p>Предзаказ</p>
            </div>
         </div>
         <div class="b-card__block"><a class="b-card__btn" @click="cartAPI.addProduct(product)" style="background: rgb(248, 93, 55);">Купить</a></div>
      </div>
    `
};

const products = {
    components: { product },
    data(){
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                console.log(data);
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="b-catalog-cards b-card">
            <div class="b-card__items">
            <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
            </div>
        </div>
    `
};

export default products;
