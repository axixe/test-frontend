import { createStore } from "vuex"
import { formsModule } from "./forms"

export default createStore({
    modules: {
        forms: formsModule
    }
})