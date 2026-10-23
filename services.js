document.addEventListener('DOMContentLoaded', function() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const serviceDetails = document.querySelectorAll('.service-detail');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');

            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            serviceDetails.forEach(detail => detail.classList.remove('active'));

            const selectedDetail = document.getElementById(serviceId);
            if (selectedDetail) {
                selectedDetail.classList.add('active');
            }
        });
    });
});
