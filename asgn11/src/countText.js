export const countText = {
    data() {
        return {
            wordComputed: ""
        }
    },
    computed: {
        countLengthCompute() {
            var value = this.wordComputed;
            return value + " (" + value.length + ")"; 
        }
    } 
}
