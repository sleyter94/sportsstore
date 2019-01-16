<template>
    <div class="row mt-2">
        <div class="col form-group">
            <select @change="changePageSize"  class="form-control">
                <option value="4">4 per Page</option>
                <option value="8">8 per Page</option>
                <option value="12">12 per Page</option>
            </select>
        </div>
        <div class="text-right col" v-if="pageCount>1">
            <div class="btn-group mx-2">
                <button @click="setCurrentPageMinus" class="btn btn-secpmdary">&#60;</button>
                <button v-for="i in pageNumbers" :key="i" @click="setCurrentPage(i)"
                    class="btn btn-secpmdary" :class="{'btn-primary':i == currentPage}">
                    {{i}}
                </button>
                <button @click="setCurrentPagePlus" class="btn btn-secpmdary">></button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapGetters,mapMutations} from "vuex";

export default {
    computed:{
        ...mapState(["currentPage"]),
        ...mapGetters(["pageCount"]),
        pageNumbers(){
            return [...Array(this.pageCount + 1).keys()].slice(1);
        }
    },methods:{
        ...mapMutations(["setCurrentPage","setCurrentPageMinus","setCurrentPagePlus","setPageSize"]),
        changePageSize($event){
            this.setPageSize(Number($event.target.value));
        }
    }    
}
</script>
