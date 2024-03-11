const { createApp } = Vue;

createApp({
    data() {
        return {
            items: ['Jaleban', 'Jeevarajah', 'jeevajal'],
            newItem: ''
        };
    },
    methods: {
        addItem() {
            if (this.newItem !== '') {
                this.items.push(this.newItem);
                this.newItem = '';
            }
        }
    }
}).mount('#app');
