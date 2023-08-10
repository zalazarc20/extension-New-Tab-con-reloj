function updateClock() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `
      <h3>Feliz <span class="day">${days[dayOfWeek]}<span>🤩</h3>
      <span>${formattedHours}:${formattedMinutes}</span>
      <span class="seconds">${formattedSeconds}</span>
      <span class="ampm">${ampm}<span>
    `;
  }
  
  // Actualiza el reloj cada segundo
  setInterval(updateClock, 1000);
  
  // Actualiza el reloj al cargar la página
  updateClock();
  