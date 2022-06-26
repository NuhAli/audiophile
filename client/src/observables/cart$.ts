import { ProductItemType } from './../components/ProductCard/products';
import { BehaviorSubject } from "rxjs";

const cart$ = new BehaviorSubject<ProductItemType[]>([])

export default cart$