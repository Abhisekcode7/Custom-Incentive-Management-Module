document.addEventListener("DOMContentLoaded", function() {
    const holidayForm = document.getElementById('holidayForm');
    const holidayPackages = document.getElementById('holidayPackages');

    holidayForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(holidayForm);
        const holidayData = Object.fromEntries(formData.entries());

        addHolidayPackage(holidayData);
        holidayForm.reset();
    });

    function addHolidayPackage(holidayData) {
        const packageDiv = document.createElement('div');
        packageDiv.classList.add('package');

        packageDiv.innerHTML = `
            <h2>${holidayData.holidayName}</h2>
            <p><strong>Duration:</strong> ${holidayData.duration} nights</p>
            <p><strong>Destination:</strong> ${holidayData.destination}</p>
            <p><strong>Location:</strong> ${holidayData.location}</p>
            <p><strong>Amenities:</strong> ${holidayData.amenities}</p>
        `;

        holidayPackages.appendChild(packageDiv);
    }
});
