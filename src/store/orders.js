import Axios from "axios";

const ORDERS_URL = "http://localhost:3500/orders";

export default{
    actions:{
        async storeOrder(context,order){
            order.cartLines = context.roorState.cart.lines;
            return (await Axios.post(ORDERS_URL,order)).data.id;
        }
    }
}