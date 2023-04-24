/* Desenvolva sua lógica aqui ... */

import { renderCategory, renderAlbum, renderSpanValue } from "./render.js";
import { categories, products } from "./productsData.js";
import { handleTheme } from "./buttonEvent.js"


handleTheme()
renderCategory(categories)
renderAlbum(products)
renderSpanValue()