<script>
// Simple form validation & alert
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent to the shadow realm.');
    form.reset();
});

// Smooth scroll for "Get Started" button
document.getElementById('ctaBtn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Audio control
document.getElementById('play-btn').addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    audio.muted = false;   // enable sound
    audio.play();          // start playback
});
</script>
</body>
