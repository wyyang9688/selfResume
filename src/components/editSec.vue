<!--  -->
<template>
    <div class="editSec com">
        <div v-if="props.key == 'Person'" class="Person">
            <div class="titleBox">
                <div class="title">基本信息</div>
                <div class="rt">
                    <u-icon name="plus" color="#2979ff" size="28"></u-icon>
                    添加
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    console.log("select");
    const props = withDefaults(
        defineProps<{
            key?: string;
            options?: [];
        }>(),
        {
            key: "Person",
            options: () => []
        }
    );
    const show = ref(false);
    const uPickerRef = ref<any>();
    const changeHandler = (e: any) => {
        const { columnIndex, value, values, index } = e;
        // console.log(e);
        // if (columnIndex === 0) {
        //     uPickerRef.value.setColumnValues(1, columnData[index]);
        // }
    };
    const showOption = () => {
        show.value = true;
    };
    interface PickItem {
        label: string;
        val: string;
        [index: string]: any;
    }
    const pickItem = ref<PickItem>();
    const emits = defineEmits<{
        (e: "confirm", item: PickItem): void;
    }>();
    const confirm = (e: any) => {
        // console.log("confirm", e);
        pickItem.value = e.value[0];
        show.value = false;
        if (pickItem.value) emits("confirm", pickItem.value);
    };
    const cancel = () => {
        show.value = false;
    };
    const setVal = (item: PickItem) => {
        pickItem.value = item;
    };
    defineExpose({
        setVal
    });
</script>
<style lang="scss" scoped></style>
