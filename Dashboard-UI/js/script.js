/* =========================================================
   Dashboard UI Interactions
   Author: Srinivas Reddy
   Purpose: UI state handling & micro-interactions
   ========================================================= */

/* -----------------------------
   Sidebar accordion behavior
   Allow only one section open
-------------------------------- */
document.querySelectorAll('.sidebar details').forEach(details => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      document.querySelectorAll('.sidebar details').forEach(other => {
        if (other !== details) {
          other.open = false;
        }
      });
    }
  });
});


/* -----------------------------
   Sidebar active menu item
-------------------------------- */
document.querySelectorAll('.sidebar-menu li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-menu li')
      .forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


/* -----------------------------
   Header timeframe select
   Small visual feedback
-------------------------------- */
const timeframeSelect = document.querySelector('.timeframe select');

if (timeframeSelect) {
  timeframeSelect.addEventListener('change', () => {
    timeframeSelect.classList.add('changed');
    setTimeout(() => {
      timeframeSelect.classList.remove('changed');
    }, 300);
  });
}


/* -----------------------------
   Revenue / Leads / W/L tabs
-------------------------------- */
document.querySelectorAll('.toggle-group button').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.parentElement;
    group.querySelectorAll('button')
      .forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


/* -----------------------------
   Card hover elevation
-------------------------------- */
const cards = document.querySelectorAll(
  '.platform-card, .referrer-card, .value-card, .sales-activity-card'
);

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});


/* -----------------------------
   Avatar hover tooltip (optional polish)
-------------------------------- */
document.querySelectorAll('.avatar, .avatar2').forEach(avatar => {
  avatar.addEventListener('mouseenter', () => {
    avatar.classList.add('hover');
  });

  avatar.addEventListener('mouseleave', () => {
    avatar.classList.remove('hover');
  });
});


/* -----------------------------
   Mobile sidebar toggle (BONUS)
-------------------------------- */
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}


/* -----------------------------
   Prevent accidental form submits
-------------------------------- */
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.type !== 'submit') {
      e.preventDefault();
    }
  });
});
