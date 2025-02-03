// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  mobileMenuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-menu") && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active")
    }
  })

  // Form Submission
  const heroForm = document.getElementById("heroForm")
  heroForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    // Collect form data
    const formData = new FormData(heroForm)
    const data = Object.fromEntries(formData.entries())

    // Here you would typically send this data to your server
    console.log("Form submitted:", data)

    // Show success message
    alert("Thank you for your message. We will get back to you soon!")
    heroForm.reset()
  })

  // Update copyright year
  const yearSpan = document.getElementById("currentYear")
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Add scroll class to header
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

