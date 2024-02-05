import { ref, computed } from "vue"
export function useSortTask() {
    const tasks = ref([
        {id: 'asdn123332', body: 'Learning css framework'},
        {id: 's89dsacbd1', body: 'Editing HTML Page'},
        {id: '0adlcmnas2', body: 'Worked on NestJS'},
        {id: 'asd2193043', body: 'Vue 3 compisition API'},
        {id: 'ysue2774nc', body: 'Home from Youtube lessons'},
        {id: 'a2smval234', body: 'Network message'}
        ]);
    const sortBy = ref('body');
    const sortedTasks = computed(() => {
        return tasks.value.sort((a, b) => a[sortBy.value]?.localeCompare(b[sortBy.value]));
    });

    return {
        tasks,
        sortBy,
        sortedTasks
    }
}