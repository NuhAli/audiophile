
import { BehaviorSubject } from "rxjs";

export interface CartItemProps {
    itemId: number,
    cartName: string,
    cartImage: string,
    quantity: number,
    price: number,
}

const cart$ = new BehaviorSubject<Array<CartItemProps>>([])



export default cart$