const showToast = uni.showToast;
const showModal = uni.showModal;
export const toast = (title: string) => {
    console.log("toast->" + title);
    showToast({
        title,
        icon: "none",
        mask: true,
        duration: 3000
    });
};
