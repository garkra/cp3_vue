let app = new Vue({
    el: '#app',
    data: {
        mealList: [],
        days: [],
    },
    computed: {

    },
    created() {
        let day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < day_names.length; i++) {
            this.days[i] = {
                day_name: day_names[i],
                breakfast: "",
                lunch: "",
                dinner: "",
            }
        }
    },
    methods: {

    },

});