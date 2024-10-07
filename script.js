function bookRoom(roomType, price) {
    alert(`You have selected the ${roomType} for $${price} per night. Please proceed to payment.`);
    window.location.href = 'payment.html';
}
