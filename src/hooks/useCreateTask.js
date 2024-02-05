import { ref } from "vue";

export function useCreateTask() {
    const post = ref({
        id: generateID(),
        body: ''
    });
    return {
        post
    };
}

function generateID(length = 10) {
    const symbols = 'abcdefjhijklmnopqrstuvwxyz1234567890';
    return symbols.split('').sort(() => Math.random() - 0.5).slice(0, length).join('');
}