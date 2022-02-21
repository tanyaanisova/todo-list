Vue.createApp({
    data() {
        return {
            valueInput: '',
            toBeDoneList: [],
            completeList: [],
            i: 0
        };
    },
    methods: {
        addTask () {
            if(this.valueInput === '') { return };
            this.toBeDoneList.push({
                title: this.valueInput,
                id: this.i
            });
            this.valueInput = '';
            this.i++;
        },
        doCheck (index, type) {
            if(type === 'need') {
                const completeMask = this.toBeDoneList.splice(index, 1);
                this.completeList.push(...completeMask);
            }
            else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.toBeDoneList.push(...noCompleteMask);
            }
        },
        removeMask (index, type) {
            const toDoList = type === 'need' ? this.toBeDoneList : this.completeList;
            toDoList.splice(index, 1);
        }
    }
}).mount('#app');