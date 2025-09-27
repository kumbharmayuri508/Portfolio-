// For future interactivity
// Example: mobile menu toggle (if you want a hamburger menu later)

console.log("Portfolio Website Loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const finalValue = bar.getAttribute("data-progress");
  
            // Animate width
            bar.style.width = finalValue + "%";
  
            // Animate number increment
            let current = 0;
            const interval = setInterval(() => {
              if (current >= finalValue) {
                clearInterval(interval);
              } else {
                current++;
                bar.textContent = current + "%";
              }
            }, 15);
  
            observer.unobserve(bar); // Run only once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );
  
    progressBars.forEach(bar => observer.observe(bar));
  });


 // Toggle Navbar for Mobile + Change Icon
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
  
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
  
      // Change icon ☰ → ✖
      if (navbar.classList.contains("active")) {
        toggle.innerHTML = "&times;"; // ✖
      } else {
        toggle.innerHTML = "&#9776;"; // ☰
      }
    });
  });

  
  // Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    // Get existing messages from localStorage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    // Add new message
    messages.push({ name, email, message });
  
    // Save back to localStorage
    localStorage.setItem("messages", JSON.stringify(messages));
  
    alert("Message saved locally ✅");
  
    // Reset form
    document.getElementById("contactForm").reset();
  
    // Show updated messages
    showMessages();
  });
  
  // Function to display messages
  function showMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let list = document.getElementById("messageList");
    list.innerHTML = "";
    messages.forEach((msg) => {
      let li = document.createElement("li");
      li.textContent = `${msg.name} (${msg.email}): ${msg.message}`;
      list.appendChild(li);
    });
  }
  
  // Load messages on page load
  showMessages();
  
  